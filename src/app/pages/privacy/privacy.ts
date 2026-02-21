import {
  Component,
  signal,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ElementRef,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { SafeEmail } from '../../shared/safe-email/safe-email';
import { SeoService } from '../../shared/services/seo.service';

export interface PrivacySidebarItem {
  id: string;
  icon: string;
  label: string;
}

export interface DataCollectionItem {
  title: string;
  description: string;
}

export interface ProcessingItem {
  text: string;
}

export interface RightItem {
  label: string;
  description: string;
}

@Component({
  selector: 'app-privacy',
  imports: [RouterLink, Icon, SafeEmail],
  templateUrl: './privacy.html',
})
export class Privacy implements OnInit, AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private seo = inject(SeoService);
  private observer?: IntersectionObserver;

  lastUpdate = '21 février 2026';
  activeSection = signal('intro');

  ngOnInit(): void {
    this.seo.update({
      title: 'Politique de confidentialité',
      description: 'Politique de confidentialité du site Les Étoiles d\'Aurore. Informations sur la collecte de données, les cookies, vos droits RGPD et la sécurité.',
      canonical: 'https://lesetoilesdaurore.fr/confidentialite',
      noindex: true,
    });
  }

  sidebarItems: PrivacySidebarItem[] = [
    { id: 'intro', icon: 'info', label: 'Introduction' },
    { id: 'data-collection', icon: 'database', label: 'Collecte des données' },
    { id: 'processing', icon: 'settings', label: 'Finalités du traitement' },
    { id: 'cookies', icon: 'cookie', label: 'Gestion des cookies' },
    { id: 'rights', icon: 'gavel', label: 'Vos droits (RGPD)' },
    { id: 'security', icon: 'shield', label: 'Sécurité' },
  ];

  dataItems: DataCollectionItem[] = [
    { title: 'Identité', description: 'Nom, prénom, date de naissance.' },
    { title: 'Contact', description: 'Adresse email, numéro de téléphone.' },
    { title: 'Santé', description: 'Contre-indications médicales, objectifs physiques.' },
    { title: 'Paiement', description: 'Historique des transactions, facturation.' },
  ];

  processingItems: ProcessingItem[] = [
    { text: 'Gestion des réservations de séances et des abonnements' },
    { text: 'Adaptation des exercices à votre condition physique (sécurité)' },
    { text: 'Communication sur vos cours et changements de planning' },
    { text: "Envoi d'informations et offres exclusives (si consenti)" },
  ];

  rights: RightItem[] = [
    { label: "Droit d'accès", description: 'Obtenir la confirmation que vos données sont traitées et en recevoir une copie.' },
    { label: 'Droit de rectification', description: 'Faire corriger des données inexactes ou compléter des données incomplètes.' },
    { label: "Droit à l'effacement", description: 'Demander la suppression de vos données personnelles.' },
    { label: 'Droit à la portabilité', description: 'Recevoir vos données dans un format structuré et lisible par machine.' },
    { label: "Droit d'opposition", description: "Vous opposer au traitement de vos données pour des motifs légitimes." },
    { label: 'Droit à la limitation', description: 'Demander la suspension temporaire du traitement de vos données.' },
  ];

  scrollTo(id: string): void {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getSidebarClass(id: string): string {
    const base = 'w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all cursor-pointer text-left border-l-4';
    if (this.activeSection() === id) {
      return `${base} font-bold bg-primary/20 text-text-light border-primary`;
    }
    return `${base} font-medium text-gray-600 border-transparent hover:bg-primary/10 hover:text-text-light`;
  }

  ngAfterViewInit(): void {
    const sections = this.el.nativeElement.querySelectorAll('section[id]');
    if (!sections.length) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section: Element) => this.observer!.observe(section));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

