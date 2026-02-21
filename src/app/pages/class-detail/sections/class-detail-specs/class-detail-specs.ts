import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';
import { ClassSpec } from '../../class-detail.model';

@Component({
  selector: 'app-class-detail-specs',
  imports: [Icon],
  templateUrl: './class-detail-specs.html',
})
export class ClassDetailSpecs {
  specs = input.required<ClassSpec[]>();
}

