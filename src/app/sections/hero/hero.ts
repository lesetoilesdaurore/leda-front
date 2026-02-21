import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [Button, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
