import { Component, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() price: string = '';
  curr = getCurrencySymbol('EURO', 'wide');
}
