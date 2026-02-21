import { Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'outline' | 'dark' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styles: ``,
})
export class Button {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');

  get variantClasses(): string {
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-primary hover:bg-primary/90 text-text-light font-bold',
      outline: 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold',
      dark: 'bg-text-light text-white hover:opacity-90',
      ghost: 'bg-transparent hover:text-primary text-text-light font-bold',
    };
    return variants[this.variant()];
  }

  get sizeClasses(): string {
    const sizes: Record<ButtonSize, string> = {
      sm: 'h-10 px-6 text-sm',
      md: 'h-12 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };
    return sizes[this.size()];
  }
}
