import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobTitle = 'Research Analyst | Microsoft Certified Data Analyst | Statistician';
  name = 'Md. Yeasir Zawad';

  description: string = `I’m a Microsoft Certified Data Analyst with 3+ years of experience in market research, 
  competitive intelligence, data & statistical analysis. I help businesses, startups, founders, investors understand markets, evaluate opportunities, 
  and make smarter decisions through clear market research and data analysis.
  
`;

  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}