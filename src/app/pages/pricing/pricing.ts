import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingHero } from './sections/pricing-hero/pricing-hero';
import { PricingTable, PricingTableData } from './sections/pricing-table/pricing-table';
import { PromoBadge } from './sections/promo-badge/promo-badge';
import { CoachingCard } from './sections/coaching-card/coaching-card';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-pricing',
  imports: [PricingHero, PricingTable, PromoBadge, CoachingCard, RouterLink],
  templateUrl: './pricing.html',
})
export class Pricing implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Tarifs',
      description: 'Découvrez les tarifs des cours de Pilates Reformer, Tapis et coaching individuel chez Les Étoiles d\'Aurore à Saint-Martin-d\'Hères. Séances d\'essai disponibles.',
      canonical: 'https://lesetoilesdaurore.fit/tarifs',
    });
  }

  reformer: PricingTableData = {
    icon: 'settings_input_component',
    title: 'Reformer',
    description: 'Les séances de Pilates Reformer sont individuelles.',
    items: [
      { label: "Séance d'essai", price: '40€' },
      { label: '1 séance', price: '50€' },
      { label: 'Séance duo (2 personnes)', price: '80€' },
      { label: 'Carte 5 séances', price: '225€' },
      { label: "Carte 10 séances + séance d'essai offerte", price: '425€', highlighted: true },
    ],
    note: "La séance d'essai est offerte pour l'achat d'une carte de 10 séances Reformer, soit 11 séances au total.",
  };

  tapis: PricingTableData = {
    icon: 'accessibility_new',
    title: 'Petits Accessoires / Tapis',
    description: 'Les cours de Pilates Mat (tapis / petit matériel) se déroulent en petit groupe de 6 à 8 personnes maximum.',
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

