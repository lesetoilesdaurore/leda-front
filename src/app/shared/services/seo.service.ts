import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleService = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  private readonly siteName = "Les Étoiles d'Aurore";
  private readonly baseUrl = 'https://lesetoilesdaurore.fr';
  private readonly defaultOgImage = `${this.baseUrl}/assets/og-image.jpg`;

  update(data: SeoData): void {
    // Title
    const fullTitle = `${data.title} | ${this.siteName}`;
    this.titleService.setTitle(fullTitle);

    // Meta description
    this.meta.updateTag({ name: 'description', content: data.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: data.ogImage ?? this.defaultOgImage });
    this.meta.updateTag({ property: 'og:url', content: data.canonical ?? this.baseUrl });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.ogImage ?? this.defaultOgImage });

    // Robots
    if (data.noindex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    }

    // Canonical
    this.updateCanonical(data.canonical ?? this.baseUrl);
  }

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}

