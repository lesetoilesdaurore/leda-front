import { Component } from '@angular/core';

export interface PhilosophyStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-bio-philosophy',
  templateUrl: './bio-philosophy.html',
})
export class BioPhilosophy {
  stats: PhilosophyStat[] = [
    { value: '500+', label: 'Clients accompagnés' },
    { value: '15', label: 'Certifications actives' },
    { value: '10+', label: "Années d'enseignement" },
  ];
}

