import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-contact-form',
  imports: [Icon],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private http = inject(HttpClient);

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
}

