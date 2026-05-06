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
        company: 'Perceive Now, Inc.',
        duration: 'Oct 2025 – Present',
        details: ["Built structured analytical outputs using Excel, Google Sheets, Power BI to support client research, reporting, and decision-making.",
          "Lead market and enterprise research across industries, turning complex data into clear business insights.",
          "Delivered 30+ market intelligence reports covering market sizing, competitive analysis, forecasting, pricing, and go-to-market strategy.",
          "Support business development through proposal writing, research scoping, and client/investor communication.",
          "Work with cross-functional teams to align requirements and support execution."
        ],
        image: 'assets/logos/Perceive_Now.png',
      },
      {
        role: 'Data Analyst',
        company: 'Perceive Now, Inc.',
        duration: 'Nov 2024 – Sep 2025',
        details: [
          'Worked on statistical data analysis and research-driven problem solving to support market intelligence and client-facing analytical work.',
          'Contributed to data-backed reporting, insight generation, and structured analysis across research and business projects.'
        ],
        image: 'assets/logos/Perceive_Now.png',
      },
      {
        role: 'Founding Member',
        company: 'AI Byters',
        duration: 'Oct 2024 – Present',
        details: [
          'Contribute to market analysis, business research, and data-driven solution development as part of the founding team.',
          'Support strategic initiatives across analytics, research, and business development activities.'
        ],
        image: 'assets/logos/ai-byters.png',
      },
      {
        role: 'Data Analyst Intern',
        company: 'AI Byters',
        duration: 'Apr 2024 – Sep 2024',
        details: [
          'Performed web scraping, data cleaning, and structured data preparation for business and research use cases.',
          'Designed interactive Power BI dashboards to visualize business metrics and communicate insights clearly.'
        ],
        image: 'assets/logos/ai-byters.png',
      },
    ];
}
