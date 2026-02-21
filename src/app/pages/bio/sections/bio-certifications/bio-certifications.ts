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
    { icon: 'verified', label: 'NASM-CPT' },
    { icon: 'workspace_premium', label: 'Formatrice Pilates Certifiée' },
    { icon: 'stars', label: 'PMA Pilates Certifiée' },
    { icon: 'clinical_notes', label: 'Precision Nutrition L1' },
  ];
}

