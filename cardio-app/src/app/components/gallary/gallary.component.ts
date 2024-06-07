import { Component } from '@angular/core';
import { CardComponent } from '../aboutus/card/card.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css',
})
export class GallaryComponent {}
