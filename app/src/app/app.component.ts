import { Component, HostListener } from '@angular/core';
import { 
  slideInFromTop, 
  slideInFromBottom, 
  slideInFromLeft, 
  slideInFromRight 
} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInFromTop, slideInFromBottom, slideInFromLeft, slideInFromRight]
})

export class AppComponent {
  title = "Brock Ramsey's Portfolio";
  animateAbilities = false;
  animateHobbies = false;
  animatePortfolio = false;
  animateContact = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    document.addEventListener('DOMContentLoaded', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      const abilitiesSection = document.getElementById('abilities');
      const hobbiesSection = document.getElementById('hobbies');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');
  
      if (abilitiesSection && abilitiesSection.offsetTop - scrollPosition < window.innerHeight) {
        this.animateAbilities = true;
      }
  
      if (hobbiesSection && hobbiesSection.offsetTop - scrollPosition < window.innerHeight) {
        this.animateHobbies = true;
      }
  
      if (portfolioSection && portfolioSection.offsetTop - scrollPosition < window.innerHeight) {
        this.animatePortfolio = true;
      }
  
      if (contactSection && contactSection.offsetTop - scrollPosition < window.innerHeight) {
        this.animateContact = true;
      }
    });
  }
}
