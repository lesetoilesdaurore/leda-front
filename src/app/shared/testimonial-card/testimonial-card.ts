import { Component, input } from '@angular/core';

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styles: `:host { display: flex; height: 100%; }`,
})
export class TestimonialCard {
  data = input.required<TestimonialData>();
}
