import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobTitle = 'Data Analyst';
  name = 'MD. Yeasir Zawad';

  description: string = `I’m a passionate data enthusiast skilled in statistics and data science.
   Experienced in data collection, analysis, and machine learning using Python, R, SQL, Excel, and Power BI.
   I transform complex data into clear insights that drive business growth. 
   Ready to uncover the stories your data holds? Let’s explore them together.`;
  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
