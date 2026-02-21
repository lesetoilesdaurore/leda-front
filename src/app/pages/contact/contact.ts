import { Component, inject, OnInit } from '@angular/core';
import { ContactHero } from './sections/contact-hero/contact-hero';
import { ContactForm } from './sections/contact-form/contact-form';
import { ContactMap } from './sections/contact-map/contact-map';
import { ContactInfo } from './sections/contact-info/contact-info';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [ContactHero, ContactForm, ContactMap, ContactInfo],
  templateUrl: './contact.html',
})
export class Contact implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact',
      description: 'Contactez Les Étoiles d\'Aurore pour réserver un cours de Pilates, Reformer, Mobilité ou CrossFit à Saint-Martin-d\'Hères. Réponse rapide garantie.',
      canonical: 'https://lesetoilesdaurore.fr/contact',
    });
  }
}

