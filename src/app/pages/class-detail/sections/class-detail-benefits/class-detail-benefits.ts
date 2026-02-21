import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';
import { ClassBenefit } from '../../class-detail.model';

@Component({
  selector: 'app-class-detail-benefits',
  imports: [Icon],
  templateUrl: './class-detail-benefits.html',
})
export class ClassDetailBenefits {
  benefits = input.required<ClassBenefit[]>();
}

