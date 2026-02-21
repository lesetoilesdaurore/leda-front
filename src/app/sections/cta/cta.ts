import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [Button, RouterLink],
  templateUrl: './cta.html',
  styles: ``,
})
export class Cta {}
