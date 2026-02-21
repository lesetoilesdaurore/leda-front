import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { BioHero } from './sections/bio-hero/bio-hero';
import { BioStory } from './sections/bio-story/bio-story';
import { BioPillars } from './sections/bio-pillars/bio-pillars';
import { BioPhilosophy } from './sections/bio-philosophy/bio-philosophy';
import { BioCertifications } from './sections/bio-certifications/bio-certifications';
import { BioCta } from './sections/bio-cta/bio-cta';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-bio',
  imports: [RouterLink, Icon, BioHero, BioStory, BioPillars, BioPhilosophy, BioCertifications, BioCta],
  templateUrl: './bio.html',
})
export class Bio implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Aurore Lemire - Coach Pilates & Fitness',
      description: 'Découvrez le parcours d\'Aurore Lemire, coach certifiée en Pilates, Reformer, Mobilité et CrossFit avec plus de 10 ans d\'expérience à Saint-Martin-d\'Hères.',
      canonical: 'https://lesetoilesdaurore.fr/bio',
    });
  }
}

