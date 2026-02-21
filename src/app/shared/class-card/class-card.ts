import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

export interface ClassCardData {
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
}

@Component({
  selector: 'app-class-card',
  imports: [Icon, RouterLink],
  templateUrl: './class-card.html',
  styles: `:host { display: flex; height: 100%; }`,
})
export class ClassCard {
  data = input.required<ClassCardData>();
}
