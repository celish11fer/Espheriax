import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CtaComponent } from './components/cta/cta.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { CountsComponent } from './components/counts/counts.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';

interface Item{
  name:string,
  test:string
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      HeaderComponent,
      FooterComponent,
      HeroComponent,
      AboutComponent,
      FeaturesComponent,
      ServiciosComponent,
      CtaComponent,
      PortafolioComponent,
      CountsComponent,
      TestimonialsComponent,
      TeamComponent,
      ContactComponent
    ]
})
export class AppComponent {
  title = 'consulting-client';


  constructor(){}

}
