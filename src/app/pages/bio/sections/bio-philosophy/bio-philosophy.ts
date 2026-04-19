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
    { value: '5', label: 'Formations et certifications actives' },
    { value: '15+', label: "Années d'enseignement" },
  ];
}

