import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobTitle = 'Research Analyst | Microsoft Certified Data Analyst | Statistician';
  name = 'Md. Yeasir Zawad';

  description: string = `I am a Microsoft Certified Data Analyst with experience in market research, 
  business intelligence, and statistical analysis. I work with Python, R, SQL, Excel, and Power BI 
  to turn data into clear insights, create interactive dashboards, 
  and deliver research that supports strategy, performance improvement, and business growth.`;

  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}