import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-bio-cta',
  imports: [RouterLink, Button],
  templateUrl: './bio-cta.html',
})
export class BioCta {}

