import { Component } from '@angular/core';
import { HeadbannerComponent } from '../headbanner/headbanner.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {}
