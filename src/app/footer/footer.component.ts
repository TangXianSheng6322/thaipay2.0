import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  year = new Date();
  yearNow = this.year.getFullYear();

  redirectTo(url: string): void {
    window.open(url, '_blank');
  }

  socialLinks = [
    { img: 'github.svg', alt: 'Github', url: 'https://github.com/' },
    { img: 'facebook.svg', alt: 'Facebook', url: 'https://www.facebook.com/' },
    { img: 'twitter.svg', alt: 'Twitter', url: 'https://x.com/?lang=en' },
  ];
}
