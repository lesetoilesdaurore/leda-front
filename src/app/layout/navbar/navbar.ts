import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Button],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }
}
