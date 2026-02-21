import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { SafeEmail } from '../../shared/safe-email/safe-email';
import { SafePhone } from '../../shared/safe-phone/safe-phone';
import { ContactProtectionService } from '../../shared/services/contact-protection.service';
import { SeoService } from '../../shared/services/seo.service';

export interface LegalSection {
  icon: string;
  title: string;
  content: string;
  hasContactInfo?: boolean;
  infoBlock?: { leftTitle: string; leftLines: string[]; rightTitle: string; rightLines: string[] };
}

@Component({
  selector: 'app-legal',
  imports: [RouterLink, Icon, SafeEmail, SafePhone],
  templateUrl: './legal.html',
})
export class Legal implements OnInit {
  protected contact = inject(ContactProtectionService);
  private seo = inject(SeoService);
  lastUpdate = '21 février 2026';

  ngOnInit(): void {
    this.seo.update({
      title: 'Mentions légales',
      description: 'Mentions légales du site Les Étoiles d\'Aurore. Informations sur l\'éditeur, l\'hébergement, la propriété intellectuelle et la protection des données.',
      canonical: 'https://lesetoilesdaurore.fr/mentions-legales',
      noindex: true,
    });
  }

  sections: LegalSection[] = [
    {
      icon: 'person',
      title: '1. Éditeur du site',
      content:
        "En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site Les Étoiles d'Aurore l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :",
      infoBlock: {
        leftTitle: 'Propriétaire',
        leftLines: [
          'Les Étoiles d\'Aurore Coaching',
          'Auto-entrepreneur',
          'SIRET : XXX XXX XXX XXXXX',
          '15 rue du Béal, 38400 Saint-Martin-d\'Hères',
        ],
        rightTitle: 'Responsable de publication',
        rightLines: [
          'Aurore Lemire',
        ],
      },
    },
    {
      icon: 'dns',
      title: '2. Hébergement',
      content:
        "Le site Les Étoiles d'Aurore est hébergé par la société :\n\nVercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nSite web : vercel.com",
    },
    {
      icon: 'copyright',
      title: '3. Propriété intellectuelle',
      content:
        "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.\n\nToute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Les Étoiles d'Aurore.",
    },
    {
      icon: 'gavel',
      title: '4. Limitation de responsabilité',
      content:
        "Les Étoiles d'Aurore s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.\n\nLe site ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. L'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.",
    },
    {
      icon: 'security',
      title: '5. Protection des données personnelles (RGPD)',
      content:
        "Conformément au Règlement Général sur la Protection des Données (RGPD) du 25 mai 2018 et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.\n\nLes informations personnelles collectées via le formulaire de contact (nom, email, message) sont uniquement utilisées pour répondre à vos demandes. Elles ne sont ni vendues, ni cédées à des tiers.\n\nPour exercer vos droits, vous pouvez adresser votre demande par email à :",
      hasContactInfo: true,
    },
    {
      icon: 'cookie',
      title: '6. Cookies',
      content:
        "Le site Les Étoiles d'Aurore n'utilise pas de cookies de suivi ou de cookies publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.\n\nConformément à la directive européenne 2009/136/CE, aucun cookie nécessitant le consentement de l'utilisateur n'est utilisé sur ce site.",
    },
    {
      icon: 'photo_camera',
      title: '7. Crédits photographiques',
      content:
        "Les photographies et visuels présents sur ce site sont la propriété de Les Étoiles d'Aurore ou sont utilisés avec l'autorisation de leurs auteurs. Toute reproduction est interdite sans autorisation préalable.",
    },
    {
      icon: 'link',
      title: '8. Liens hypertextes',
      content:
        "Le site Les Étoiles d'Aurore peut contenir des liens vers d'autres sites internet. Les Étoiles d'Aurore ne dispose d'aucun moyen de contrôle du contenu de ces sites tiers et n'assume par conséquent aucune responsabilité quant au contenu de ces sites.",
    },
  ];
}

