import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCard, TestimonialData } from '../../shared/testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCard, CommonModule],
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
      quote: '« Aurore est une coach qui permet à chacun et chacune de trouver sa place dans ses cours de Pilates. Que vous soyez débutants ou confirmés elle vous accompagne avec bienveillance. C\'est agréable d\'avancer à son rythme et de progresser. Aurore avec sa pédagogie m\'a permis de me réconcilier avec le sport. »',
      name: 'Aline, 58 ans',
      role: 'Pilates Mat & Reformer',
      avatarInitial: "A",
    },
    {
      quote: '« Je prends régulièrement des cours de Pilâtes avec Aurore. C\'est une coach très à l\'écoute. Elle s\'adapte parfaitement aux besoins des différentes personnes suivant leurs âges, leurs capacités et même pendant et après la grossesse. Un grand bravo à cette coach. »',
      name: 'Audrey, 43 ans',
      role: 'Pilâtes et Crosstraining',
      avatarInitial: "A",
    },
  ];

  private readonly itemsPerView = 3;
  currentIndex = signal(0);

  visibleTestimonials = computed(() => {
    const start = this.currentIndex();
    const end = start + this.itemsPerView;
    return this.testimonials.slice(start, end);
  });

  canGoNext = computed(() => {
    return this.currentIndex() + this.itemsPerView < this.testimonials.length;
  });

  canGoPrev = computed(() => {
    return this.currentIndex() > 0;
  });

  readonly totalPages = computed(() => {
    return Math.max(1, this.testimonials.length - this.itemsPerView + 1);
  });

  goNext(): void {
    if (this.canGoNext()) {
      this.currentIndex.update((index) => index + 1);
    }
  }

  goPrev(): void {
    if (this.canGoPrev()) {
      this.currentIndex.update((index) => index - 1);
    }
  }
}
