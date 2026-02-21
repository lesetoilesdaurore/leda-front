export interface ClassBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ClassSpec {
  icon: string;
  label: string;
  value: string;
}

export interface ClassDetailData {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  heroDescription: string;
  specs: ClassSpec[];
  benefits: ClassBenefit[];
  galleryImages: string[];
  galleryTitle: string;
  coachNote: string;
}

