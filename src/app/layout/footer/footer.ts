import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  copied = signal(false);

  async shareOrCopy() {
    const url = window.location.origin;
    const shareData = {
      title: 'Les Étoiles d\'Aurore',
      text: 'Découvrez Les Étoiles d\'Aurore – Pilates, Reformer et fitness fonctionnel.',
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // L'utilisateur a annulé le partage
      }
    } else {
      await navigator.clipboard.writeText(url);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
