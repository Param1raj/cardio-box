import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadbannerComponent } from './components/headbanner/headbanner.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CardComponent } from './components/aboutus/card/card.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeadbannerComponent,
    AboutusComponent,
    CardComponent,
    GallaryComponent,
    MerchandiseComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cardio-app';
}
