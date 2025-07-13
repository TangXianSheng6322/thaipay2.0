import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Hero2Component } from './hero2/hero2.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { StepsComponent } from './steps/steps.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { FinalComponent } from './final/final.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroComponent,
    NavbarComponent,
    Hero2Component,
    BenefitsComponent,
    StepsComponent,
    OurMissionComponent,
    FinalComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thaipay';
}
