import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Icon } from '../../shared/icon/icon';
import { ClassDetailHero } from './sections/class-detail-hero/class-detail-hero';
import { ClassDetailSpecs } from './sections/class-detail-specs/class-detail-specs';
import { ClassDetailBenefits } from './sections/class-detail-benefits/class-detail-benefits';
import { ClassDetailGallery } from './sections/class-detail-gallery/class-detail-gallery';
import { ClassDetailSidebar } from './sections/class-detail-sidebar/class-detail-sidebar';
import { CLASS_DATA } from './class-detail.data';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-class-detail',
  imports: [
    RouterLink,
    Icon,
    ClassDetailHero,
    ClassDetailSpecs,
    ClassDetailBenefits,
    ClassDetailGallery,
    ClassDetailSidebar,
  ],
  templateUrl: './class-detail.html',
})
export class ClassDetail {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  private slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? ''))
  );

  classData = computed(() => {
    const slug = this.slug();
    return slug ? CLASS_DATA[slug] ?? null : null;
  });

  constructor() {
    effect(() => {
      const data = this.classData();
      if (data) {
        this.seo.update({
          title: `Cours ${data.title} - ${data.subtitle}`,
          description: data.heroDescription,
          canonical: `https://lesetoilesdaurore.fr/cours/${data.slug}`,
        });
      }
    });
  }
}

