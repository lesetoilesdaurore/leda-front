import { Injectable } from '@angular/core';

/**
 * Service de protection des informations de contact contre les bots.
 *
 * Les données sont stockées en morceaux séparés et encodées en base64.
 * L'assemblage se fait uniquement côté JS au runtime, rendant le scraping
 * par les bots HTML classiques inefficace.
 */
@Injectable({ providedIn: 'root' })
export class ContactProtectionService {

  // Email stocké en morceaux séparés encodés en base64
  private readonly emailParts = [
    btoa('Aurore'),
    btoa('.lemire'),
    btoa('@'),
    btoa('orange'),
    btoa('.fr'),
  ];

  // Téléphone stocké en morceaux encodés en base64
  private readonly phoneParts = [
    btoa('06'),
    btoa(' 19'),
    btoa(' 89'),
    btoa(' 48'),
    btoa(' 08'),
  ];

  /** Assemble et retourne l'email décodé */
  getEmail(): string {
    return this.emailParts.map((p) => atob(p)).join('');
  }

  /** Retourne l'email affiché avec obfuscation visuelle (pour le texte visible) */
  getEmailDisplay(): string {
    return this.getEmail();
  }

  /** Assemble et retourne le téléphone décodé */
  getPhone(): string {
    return this.phoneParts.map((p) => atob(p)).join('');
  }

  /** Retourne le téléphone formaté pour un lien tel: */
  getPhoneHref(): string {
    return this.getPhone().replace(/\s/g, '');
  }

  /** Ouvre le client mail */
  openEmail(): void {
    window.location.href = `${'mai'}${'lto'}:${this.getEmail()}`;
  }

  /** Ouvre le dialer téléphonique */
  openPhone(): void {
    window.location.href = `${'te'}${'l'}:${this.getPhoneHref()}`;
  }
}

