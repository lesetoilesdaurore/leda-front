import { Component } from '@angular/core';
import { ClassCard, ClassCardData } from '../../shared/class-card/class-card';

@Component({
  selector: 'app-classes',
  imports: [ClassCard],
  templateUrl: './classes.html',
  styles: ``,
})
export class Classes {
  classes: ClassCardData[] = [
    {
      icon: 'self_improvement',
      title: 'Pilâtes Mat',
      description: 'Renforcement du corps grâce à des mouvements ciblés, engagés et fluides associé à une respiration contrôlée.',
      imageUrl: 'assets/pilate-mat-crop.webp',
      imageAlt: 'Femme pratiquant le yoga sur un tapis',
      slug: 'pilates-mat',
    },
    {
      icon: 'fitness_center',
      title: 'Pilâtes Reformer',
      description: "Entraînement en résistance sur le Pilates \"Reformer\" pour un renforcement complet et un meilleur alignement.",
      imageUrl: 'assets/pilate-reformer-crop.jpg',
      imageAlt: 'Machine Reformer Pilates dans un studio',
      slug: 'pilates-reformer',
    },
    {
      icon: 'waves',
      title: 'Mobilité',
      description: 'Améliorez la santé articulaire et la qualité de mouvement avec des séquences fluides et régénérantes.',
      imageUrl: 'assets/1000021884.png',
      imageAlt: 'Personne pratiquant des étirements en mouvement fluide',
      slug: 'mobilite',
    },
    {
      icon: 'bolt',
      title: 'Crosstraining',
      description: 'Mouvements fonctionnels à intensité progressive conçus pour développer puissance, explosivité et endurance.',
      imageUrl: 'assets/crossfit-crop.webp',
      imageAlt: 'Homme soulevant des poids en salle de sport',
      slug: 'crossfit',
    },
  ];
}
