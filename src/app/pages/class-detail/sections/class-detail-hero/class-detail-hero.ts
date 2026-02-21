import { Component, input } from '@angular/core';
import { ClassDetailData } from '../../class-detail.model';

@Component({
  selector: 'app-class-detail-hero',
  templateUrl: './class-detail-hero.html',
})
export class ClassDetailHero {
  data = input.required<ClassDetailData>();
}

