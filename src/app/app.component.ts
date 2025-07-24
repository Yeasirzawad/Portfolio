import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobTitle = 'Research Analyst | Microsoft Certified Data Analyst | Statistian';
  name = 'Md. Yeasir Zawad';

  description: string = `Microsoft Certified Data Analyst with a passion for turning raw data into 
  meaningful insights. I bring hands-on experience in statistics, data science, and 
  machine learning using Python, R, SQL, Excel, and Power BI. From data collection to analysis and 
  visualization, I help uncover the hidden stories in data that drive smarter decisions and business growth.
  Ready to uncover the stories your data holds? Let’s explore them together.`;
  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
