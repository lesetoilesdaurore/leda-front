import { Component, input } from '@angular/core';

@Component({
  selector: 'app-class-detail-gallery',
  templateUrl: './class-detail-gallery.html',
})
export class ClassDetailGallery {
  images = input.required<string[]>();
  title = input<string>('En images');
}

