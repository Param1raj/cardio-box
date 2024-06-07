import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-merchandise',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './merchandise.component.html',
  styleUrl: './merchandise.component.css',
  // bootstrap: [AppComponent],
})
export class MerchandiseComponent {}
