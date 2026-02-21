import { Component } from '@angular/core';
import { TestimonialCard, TestimonialData } from '../../shared/testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard],
  templateUrl: './testimonials.html',
  styles: ``,
})
export class Testimonials {
  testimonials: TestimonialData[] = [
    {
      quote: '« L\'équilibre parfait entre entraînement intense et mouvement conscient. Je ne me suis jamais sentie aussi forte et mobile. »',
      name: 'Malone J.',
      role: 'Adepte du Pilates',
      avatarUrl: 'assets/dos.webp',
    },
    {
      quote: '« Le style de coaching de Sarah est incroyablement bienveillant tout en étant exigeant. Les cours de Reformer ont complètement changé ma posture. »',
      name: 'Carlos B.',
      role: 'Client Reformer',
      avatarUrl: 'assets/wbs.webp',
    },
    {
      quote: '« J\'étais intimidée par le CrossFit mais les cours de force ici sont parfaitement adaptés. Je me sens capable et pleine d\'énergie. »',
      name: 'Guillaume M.',
      role: 'Membre Force',
      avatarUrl: 'assets/row.webp',
    },
  ];
}
