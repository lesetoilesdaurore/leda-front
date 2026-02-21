import { Component, inject, OnInit } from '@angular/core';
import { PricingHero } from './sections/pricing-hero/pricing-hero';
import { PricingTable, PricingTableData } from './sections/pricing-table/pricing-table';
import { PromoBadge } from './sections/promo-badge/promo-badge';
import { CoachingCard } from './sections/coaching-card/coaching-card';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-pricing',
  imports: [PricingHero, PricingTable, PromoBadge, CoachingCard],
  templateUrl: './pricing.html',
})
export class Pricing implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Tarifs',
      description: 'Découvrez les tarifs des cours de Pilates Reformer, Tapis et coaching individuel chez Les Étoiles d\'Aurore à Saint-Martin-d\'Hères. Séances d\'essai disponibles.',
      canonical: 'https://lesetoilesdaurore.fr/tarifs',
    });
  }

  reformer: PricingTableData = {
    icon: 'settings_input_component',
    title: 'Reformer',
    items: [
      { label: "Séance d'essai", price: '40€' },
      { label: '1 séance', price: '50€' },
      { label: 'Carte 5 séances', price: '225€' },
      { label: 'Carte 10 séances', price: '400€' },
    ],
  };

  tapis: PricingTableData = {
    icon: 'accessibility_new',
    title: 'Petits Accessoires / Tapis',
    items: [
      { label: "Séance d'essai", price: '10€' },
      { label: '1 séance', price: '15€' },
      { label: 'Carte 5 séances', price: '70€' },
      { label: 'Carte 10 séances', price: '135€' },
      { label: 'Trimestre', price: '150€' },
      { label: '2 séances / semaine', price: '220€', highlighted: true },
    ],
  };
}

