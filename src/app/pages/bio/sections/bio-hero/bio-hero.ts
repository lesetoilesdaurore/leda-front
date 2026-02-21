import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-bio-hero',
  imports: [Icon, RouterLink],
  templateUrl: './bio-hero.html',
})
export class BioHero {
  badges: string[] = [
    'Spécialiste Pilates',
    'Reformer Certifiée',
    'Experte Mobilité',
  ];
}

