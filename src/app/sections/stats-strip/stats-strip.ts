import { Component } from '@angular/core';

export interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-strip',
  imports: [],
  templateUrl: './stats-strip.html',
  styles: ``,
})
export class StatsStrip {
  stats: Stat[] = [
    { value: '10+', label: "Années d'expérience" },
    { value: '500+', label: 'Clients transformés' },
    { value: '4', label: 'Méthodes spécialisées' },
  ];
}
