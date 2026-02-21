import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { StatsStrip } from '../../sections/stats-strip/stats-strip';
import { Classes } from '../../sections/classes/classes';
import { About } from '../../sections/about/about';
import { Testimonials } from '../../sections/testimonials/testimonials';
import { Cta } from '../../sections/cta/cta';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [Hero, StatsStrip, Classes, About, Testimonials, Cta],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Pilates, Reformer & Coaching à Saint-Martin-d\'Hères',
      description: 'Les Étoiles d\'Aurore : cours de Pilates Mat, Reformer, Mobilité et CrossFit à Saint-Martin-d\'Hères (Grenoble). Coaching personnalisé par Aurore Lemire.',
      canonical: 'https://lesetoilesdaurore.fr/',
    });
  }
}

