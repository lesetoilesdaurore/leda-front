import { Component, computed, input, signal } from '@angular/core';

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  avatarInitial?: string;
}

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styles: `:host { display: flex; height: 100%; }`,
})
export class TestimonialCard {
  data = input.required<TestimonialData>();

  private readonly sentenceLimit = 3;
  expanded = signal(false);

  sentences = computed(() => this.splitSentences(this.data().quote));

  isExpandable = computed(() => this.sentences().length > this.sentenceLimit);

  displayedQuote = computed(() => {
    if (this.expanded() || !this.isExpandable()) {
      return this.data().quote;
    }

    return this.sentences().slice(0, this.sentenceLimit).join(' ');
  });

  toggleExpanded(): void {
    this.expanded.update((value) => !value);
  }

  private splitSentences(text: string): string[] {
    const cleaned = text.trim();

    if (!cleaned) {
      return [];
    }

    const matches = cleaned.match(/[^.!?…]+[.!?…]+["'»”]?|[^.!?…]+$/g);
    return (matches ?? [cleaned]).map((sentence) => sentence.trim()).filter(Boolean);
  }
}
