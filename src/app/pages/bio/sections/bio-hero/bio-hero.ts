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
    'Reformer et Pilâtes Mat Certifiée',
    'Experte Mobilité',
    'Renforcement musculaire',
    'Core'
  ];
}

