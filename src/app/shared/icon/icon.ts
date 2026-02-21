import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  template: `<span class="material-symbols-outlined leading-none" [class]="cssClass()">{{ name() }}</span>`,
  styles: `:host { display: inline-flex; align-items: center; justify-content: center; line-height: 1; }`,
})
export class Icon {
  name = input.required<string>();
  cssClass = input<string>('');
}
