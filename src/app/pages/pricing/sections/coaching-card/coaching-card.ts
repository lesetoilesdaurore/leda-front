import { Component } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-coaching-card',
  imports: [Icon],
  templateUrl: './coaching-card.html',
})
export class CoachingCard {
  specialties: string[] = [
    'Mobilité',
    'Souplesse',
    'Endurance / Cardio',
    'Renforcement musculaire',
  ];
}

