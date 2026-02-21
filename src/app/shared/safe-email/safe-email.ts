import { Component, inject, input } from '@angular/core';
import { ContactProtectionService } from '../services/contact-protection.service';

/**
 * Affiche un email de manière protégée contre les bots.
 *
 * - Le HTML source ne contient ni mailto: ni l'adresse en clair
 * - L'adresse est assemblée par JS au runtime uniquement
 * - Un clic ouvre le client mail
 */
@Component({
  selector: 'app-safe-email',
  template: `
    <button
      (click)="contact.openEmail()"
      [class]="cssClass()"
      class="cursor-pointer bg-transparent border-none p-0 inline"
      [attr.aria-label]="'Envoyer un email'">
      {{ contact.getEmailDisplay() }}
    </button>
  `,
})
export class SafeEmail {
  contact = inject(ContactProtectionService);
  cssClass = input<string>('text-primary font-medium hover:underline');
}

