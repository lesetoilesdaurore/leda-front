import { Component, input } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';

export interface PricingItem {
  label: string;
  price: string;
  highlighted?: boolean;
}

export interface PricingTableData {
  icon: string;
  title: string;
  items: PricingItem[];
}

@Component({
  selector: 'app-pricing-table',
  imports: [Icon],
  templateUrl: './pricing-table.html',
})
export class PricingTable {
  data = input.required<PricingTableData>();
}

