import { Component, inject, input } from '@angular/core';
import { ContactProtectionService } from '../services/contact-protection.service';

/**
 * Affiche un numéro de téléphone de manière protégée contre les bots.
 *
 * - Le HTML source ne contient ni tel: ni le numéro en clair
 * - Le numéro est assemblé par JS au runtime uniquement
 * - Un clic ouvre le dialer téléphonique
 */
@Component({
  selector: 'app-safe-phone',
  template: `
    <button
      (click)="contact.openPhone()"
      [class]="cssClass()"
      class="cursor-pointer bg-transparent border-none p-0 inline"
      [attr.aria-label]="'Appeler'">
      {{ contact.getPhone() }}
    </button>
  `,
})
export class SafePhone {
  contact = inject(ContactProtectionService);
  cssClass = input<string>('text-text-light font-medium');
}

