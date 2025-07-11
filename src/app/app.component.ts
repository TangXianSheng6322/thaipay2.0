import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Hero2Component } from './hero2/hero2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, NavbarComponent, Hero2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thaipay';
}
