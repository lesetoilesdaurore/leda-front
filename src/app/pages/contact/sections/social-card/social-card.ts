import { Component } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';

export interface SocialLink {
  icon: string;
  url: string;
}

@Component({
  selector: 'app-social-card',
  imports: [Icon],
  templateUrl: './social-card.html',
})
export class SocialCard {
  links: SocialLink[] = [
    { icon: 'photo_camera', url: '#' },
    { icon: 'thumb_up', url: '#' },
    { icon: 'smart_display', url: '#' },
  ];
}

