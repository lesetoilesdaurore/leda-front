import { ClassDetailData } from './class-detail.model';

export const CLASS_DATA: Record<string, ClassDetailData> = {
  'pilates-mat': {
    slug: 'pilates-mat',
    title: 'Pilâtes Mat',
    subtitle: 'Maîtrisez votre corps',
    badge: 'Précision & Contrôle',
    heroImage: 'assets/pilate-mat-crop.webp',
    heroDescription:
      'Transformez votre corps grâce à des mouvements précis au sol, conçus pour renforcer en profondeur et développer une conscience corporelle unique.',
    specs: [
      { icon: 'schedule', label: 'Durée', value: '50 minutes' },
      { icon: 'exercise', label: 'Intensité', value: 'Modérée' },
      { icon: 'fitness_center', label: 'Équipement', value: 'Tapis & accessoires' },
      { icon: 'groups', label: 'Effectif', value: 'Max 10 pers.' },
    ],
    benefits: [
      {
        icon: 'accessibility_new',
        title: 'Alignement postural',
        description:
          'Corrigez les déséquilibres liés à la sédentarité en renforçant les muscles stabilisateurs profonds de la colonne.',
      },
      {
        icon: 'bolt',
        title: 'Gainage profond',
        description:
          'Développez une force fonctionnelle qui soutient vos mouvements quotidiens et vos performances sportives.',
      },
      {
        icon: 'self_improvement',
        title: 'Connexion corps-esprit',
        description:
          'Améliorez la coordination neuromusculaire et réduisez le stress grâce à une respiration contrôlée.',
      },
      {
        icon: 'spa',
        title: 'Souplesse & récupération',
        description:
          'Travaillez en douceur l\'amplitude articulaire tout en favorisant la récupération musculaire.',
      },
    ],
    galleryImages: ['assets/photo-09.webp', 'assets/photo-11.webp', 'assets/photo-13.webp'],
    galleryTitle: 'En images',
    coachNote:
      '« Le Pilates Mat est le fondement de tout mon enseignement. C\'est là que tout commence : la respiration, le contrôle, la conscience de chaque muscle. »',
  },

  'pilates-reformer': {
    slug: 'pilates-reformer',
    title: 'Pilâtes Reformer',
    subtitle: 'Sculptez & Renforcez',
    badge: 'Force & Précision',
    heroImage: 'assets/pilate-reformer-crop.jpg',
    heroDescription:
      'Entraînement en résistance dynamique sur machine Reformer pour un renforcement complet du corps et un alignement optimal.',
    specs: [
      { icon: 'schedule', label: 'Durée', value: '50 minutes' },
      { icon: 'exercise', label: 'Intensité', value: 'Modérée à élevée' },
      { icon: 'fitness_center', label: 'Équipement', value: 'Reformer & ressorts' },
      { icon: 'groups', label: 'Effectif', value: 'Max 6 pers.' },
    ],
    benefits: [
      {
        icon: 'accessibility_new',
        title: 'Résistance progressive',
        description:
          'Les ressorts du Reformer offrent une résistance variable qui s\'adapte à votre niveau et challenge en permanence.',
      },
      {
        icon: 'bolt',
        title: 'Tonification longue & fine',
        description:
          'L\'entraînement sur Reformer développe une musculature longue et dessinée sans volume excessif.',
      },
      {
        icon: 'self_improvement',
        title: 'Coordination athlétique',
        description:
          'Améliorez votre équilibre et votre coordination grâce à un travail en instabilité contrôlée.',
      },
      {
        icon: 'healing',
        title: 'Réhabilitation douce',
        description:
          'Idéal pour la rééducation post-blessure grâce à des mouvements guidés et sans impact.',
      },
    ],
    galleryImages: ['assets/photo-02.webp', 'assets/photo-06.webp', 'assets/photo-12.webp'],
    galleryTitle: 'En images',
    coachNote:
      '« Le Reformer est un outil extraordinaire. Il permet de travailler en profondeur tout en préservant les articulations. Mes élèves voient des résultats dès les premières séances. »',
  },

  mobilite: {
    slug: 'mobilite',
    title: 'Mobilité',
    subtitle: 'Bougez librement',
    badge: 'Fluidité & Bien-être',
    heroImage: 'assets/mobility-crop.jpg',
    heroDescription:
      'Améliorez la santé articulaire et la qualité de mouvement grâce à des séquences fluides, restauratrices et accessibles à tous.',
    specs: [
      { icon: 'schedule', label: 'Durée', value: '45 minutes' },
      { icon: 'exercise', label: 'Intensité', value: 'Douce à modérée' },
      { icon: 'fitness_center', label: 'Équipement', value: 'Aucun / accessoires légers' },
      { icon: 'groups', label: 'Effectif', value: 'Max 12 pers.' },
    ],
    benefits: [
      {
        icon: 'accessibility_new',
        title: 'Amplitude articulaire',
        description:
          'Augmentez progressivement votre amplitude de mouvement pour des gestes plus fluides au quotidien.',
      },
      {
        icon: 'healing',
        title: 'Prévention des blessures',
        description:
          'Renforcez les zones vulnérables et réduisez les risques de blessures liées au sport ou à la sédentarité.',
      },
      {
        icon: 'self_improvement',
        title: 'Détente & récupération',
        description:
          'Des séquences restauratrices qui favorisent la récupération musculaire et la détente nerveuse.',
      },
      {
        icon: 'spa',
        title: 'Bien-être global',
        description:
          'Un travail doux qui libère les tensions accumulées et améliore la qualité de vie au quotidien.',
      },
    ],
    galleryImages: ['assets/photo-03.webp', 'assets/photo-10.webp', 'assets/photo-15.webp'],
    galleryTitle: 'En images',
    coachNote:
      '« La mobilité est souvent négligée, pourtant c\'est la base de tout mouvement sain. Prenez soin de vos articulations, elles vous le rendront. »',
  },

  crossfit: {
    slug: 'crossfit',
    title: 'CrossFit',
    subtitle: 'Puissance & Dépassement',
    badge: 'Haute intensité',
    heroImage: 'assets/photo-21.webp',
    heroDescription:
      'Mouvements fonctionnels à haute intensité conçus pour développer puissance explosive, endurance et mental d\'acier.',
    specs: [
      { icon: 'schedule', label: 'Durée', value: '60 minutes' },
      { icon: 'exercise', label: 'Intensité', value: 'Élevée' },
      { icon: 'fitness_center', label: 'Équipement', value: 'Barres, kettlebells, cordes' },
      { icon: 'groups', label: 'Effectif', value: 'Max 12 pers.' },
    ],
    benefits: [
      {
        icon: 'bolt',
        title: 'Puissance explosive',
        description:
          'Développez une force fonctionnelle et une puissance qui se transfèrent dans tous les aspects de votre vie.',
      },
      {
        icon: 'favorite',
        title: 'Endurance cardiovasculaire',
        description:
          'Améliorez votre capacité cardio grâce à des WODs (Workout Of the Day) variés et progressifs.',
      },
      {
        icon: 'psychology',
        title: 'Force mentale',
        description:
          'Repoussez vos limites et développez une résilience qui dépasse le cadre de l\'entraînement.',
      },
      {
        icon: 'groups',
        title: 'Esprit de groupe',
        description:
          'L\'énergie collective du groupe vous porte et vous motive à donner le meilleur de vous-même.',
      },
    ],
    galleryImages: ['assets/photo-07.webp', 'assets/photo-20.webp', 'assets/photo-04.webp'],
    galleryTitle: 'En images',
    coachNote:
      '« Le CrossFit, c\'est bien plus que soulever des poids. C\'est apprendre à se dépasser dans un environnement bienveillant où chaque mouvement est adapté à votre niveau. »',
  },
};

