import { Component } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';

export interface Certification {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-bio-certifications',
  imports: [Icon],
  templateUrl: './bio-certifications.html',
})
export class BioCertifications {
  certifications: Certification[] = [
    { icon: 'verified', label: 'Reprogrammation Myofasciale' },
    { icon: 'workspace_premium', label: 'Formatrice Pilates Certifiée' },
    { icon: 'stars', label: 'Formatrice Pilates Reformer Certifiée' },
    { icon: 'clinical_notes', label: 'Sport et périnée' },
  ];
}

