import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Data Analyst',
      company: 'AI Byters',
      duration: 'December 2024 – Present',
      details: [
        'Conducted web scraping and data analysis using Python.',
        'Developed interactive Power BI dashboard for job market insights.',
        'Working on a financial service tool for trend forecasting.'
      ],
      image: 'assets/logos/ai-byters.png',
    },
    {
      role: 'Data Analyst Intern',
      company: 'AI Byters',
      duration: 'April 2024 – November 2024',
      details: [
        'Conducted web scraping and data analysis using Python.',
        'Developed interactive Power BI dashboard for job market insights.',
        'Working on a financial service tool for trend forecasting.'
      ],
      image: 'assets/logos/ai-byters.png',
    },
    {
      role: 'Junior Data Annotator',
      company: 'Quantigo AI',
      duration: 'January 2021 – April 2021',
      details: [
        'Worked as an image and video annotator for ML projects.'
      ],
      image: 'assets/logos/q-ai.png',
    }
  ];
}
