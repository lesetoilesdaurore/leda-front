import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../../shared/icon/icon';

export interface Pillar {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

@Component({
  selector: 'app-bio-pillars',
  imports: [Icon, RouterLink],
  templateUrl: './bio-pillars.html',
})
export class BioPillars {
  pillars: Pillar[] = [
    {
      icon: 'self_improvement',
      title: 'Pilates',
      description: 'Stabilité du tronc, santé vertébrale et connexion corps-esprit pour une endurance musculaire longue et affinée.',
      slug: 'pilates-mat',
    },
    {
      icon: 'settings_input_component',
      title: 'Pilates Reformer',
      description: 'Entraînement en résistance dynamique sur Reformer pour challenger l\'équilibre et la coordination athlétique.',
      slug: 'pilates-reformer',
    },
    {
      icon: 'accessibility_new',
      title: 'Mobilité',
      description: 'Techniques de récupération active pour augmenter l\'amplitude articulaire et prévenir les blessures courantes.',
      slug: 'mobilite',
    },
    {
      icon: 'bolt',
      title: 'Puissance Fonctionnelle',
      description: 'Mouvements fonctionnels haute intensité adaptés à tous les niveaux pour développer force et endurance cardiovasculaire.',
      slug: 'crossfit',
    },
  ];
}

