import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icon } from '../../../../shared/icon/icon';
import { ContactProtectionService } from '../../../../shared/services/contact-protection.service';

@Component({
  selector: 'app-contact-form',
  imports: [Icon],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private http = inject(HttpClient);
  private contact = inject(ContactProtectionService);

  /** 'mailto' actif pour ouvrir la boîte mail utilisateur. Garder 'api' pour le flux SMTP futur. */
  private readonly submitMode: 'mailto' | 'api' = 'mailto';

  /** Honeypot : si ce champ est rempli, c'est un bot */
  honeypot = '';

  /** Timestamp du chargement du formulaire (anti-bot : soumission trop rapide = bot) */
  private loadedAt = Date.now();

  /** Minimum 3 secondes entre chargement et soumission */
  private readonly MIN_SUBMIT_DELAY_MS = 3000;

  submitted = signal(false);
  submitting = signal(false);
  errorMessage = signal('');

  onHoneypotInput(event: Event): void {
    this.honeypot = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.errorMessage.set('');

    // Piège honeypot
    if (this.honeypot) {
      this.submitted.set(true);
      return;
    }

    // Vérification du délai minimum
    if (Date.now() - this.loadedAt < this.MIN_SUBMIT_DELAY_MS) {
      this.submitted.set(true);
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const body = {
      name: (formData.get('name') as string)?.trim(),
      email: (formData.get('email') as string)?.trim(),
      interest: (formData.get('interest') as string) || '',
      message: (formData.get('message') as string)?.trim(),
    };

    if (!body.name || !body.email || !body.message) {
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (this.submitMode === 'mailto') {
      this.submitViaMailto(body);
      this.submitted.set(true);
      form.reset();
      return;
    }

    this.submitViaApi(body);
  }

  private submitViaApi(body: { name: string; email: string; interest: string; message: string }): void {
    this.submitting.set(true);

    this.http.post<{ success?: boolean; error?: string }>('/api/contact', body).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: (err) => {
        this.submitting.set(false);
        const serverMsg = err?.error?.error;
        this.errorMessage.set(
          serverMsg || "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        );
      },
    });
  }

  private submitViaMailto(body: { name: string; email: string; interest: string; message: string }): void {
    const interestLabels: Record<string, string> = {
      pilates: 'Pilates Mat',
      reformer: 'Pilates Reformer',
      mobility: 'Mobilité',
      crossfit: 'CrossFit',
      general: 'Demande générale',
    };

    const interestLabel = interestLabels[body.interest] || body.interest || 'Non précisé';
    const to = this.contact.getEmail();
    const subject = `Demande de contact - ${body.name}`;
    const messageLines = [
      `Nom: ${body.name}`,
      `Email: ${body.email}`,
      `Intérêt: ${interestLabel}`,
      '',
      'Message:',
      body.message,
    ];

    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageLines.join('\n'))}`;
  }
}

