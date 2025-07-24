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
      role: 'Research Analyst',
      company: 'AI Byters',
      duration: 'December 2024 – Present',
      details: [
        'Conduct market research and developed 25+ reports with TAM/SAM/SOM estimation, market size forecasting, customer segmentation, competitive analysis, and M&A evaluation',
        'Created interactive market intelligence reports in Power BI, and developed forecasting models in Python to project market size, growth trends, and strategic opportunities',
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
