import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  heading!: string;
  @Input()
  description!: string;
  @Input() imgSrc!: string;
  @Input() hasButton: boolean = false;
  @Input() playButton: boolean = false;
}
