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
      quote: '« Je pratique le Pilâtes depuis plus d\'un an avec Aurore, j\'apprécie beaucoup sa pédagogie et sa patience. Elle sait bien adapter les cours et faire progresser les personnes, je viens toujours à ses cours avec envie et plaisir. »',
      name: 'Pascal, 63 ans',
      role: 'Adepte du Pilates',
      avatarInitial: 'P',
    },
    {
      quote: '« Aurore est une coach exceptionnelle ! Très professionnelle, à l\'écoute et toujours motivante, elle sait parfaitement adapter les séances à chacun, quelque soit le niveau. Ses cours de pilâtes sont à la fois efficaces et agréables, on sent rapidement les bienfaits sur le corps et le mental. Elle corrige avec précision, encourage sans pression et crée une super ambiance. Je recommande à 100% pour ceux et celles qui veulent progresser tout en prenant du plaisir ! »',
      name: 'Emmanuel, 56 ans',
      role: 'Coaching individuel',
      avatarInitial: 'E',
    },
    {
      quote: '« J\'étais intimidé par le CrossFit mais les cours de force ici sont parfaitement adaptés. Je me sens capable et plein d\'énergie. »',
      name: 'Guillaume, 26 ans',
      role: 'Membre Force',
      avatarInitial: "G",
    },
  ];
}
