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
          role: 'Lead Research Analyst',
          company: 'Perceive Now, Inc.',
          duration: 'Oct 2025 – Present',
          details: [
            'Lead end-to-end market and enterprise research across multiple industries, designing research frameworks that turn market, competitive, and operational data into clear business insights.',
            'Delivered 30+ market intelligence reports covering market sizing, customer segmentation, competitive analysis, forecasting, pricing strategy, product-market fit, and go-to-market planning.',
            'Support business development through proposal writing, research scoping, next-step planning, and follow-up content for investor and client communications.',
            'Collaborate cross-functionally with backend, UI/UX, and other internal teams to gather requirements, align on deliverables, and ensure the right data, information, and content are available for execution.',
            'Contribute to project coordination and operational workflows by helping manage documentation, communication, and handoff processes across research and delivery teams.'
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
          'Performed web scraping, data cleaning, and structured data preparation using Python for business and research use cases.',
          'Designed interactive Power BI dashboards to visualize business metrics and communicate insights clearly.'
        ],
        image: 'assets/logos/ai-byters.png',
      },
      {
        role: 'Data Annotator',
        company: 'Quantigo AI',
        duration: 'Jul 2020 – Apr 2021',
        details: [
          'Annotated image and video datasets for machine learning projects, supporting quality assurance and model training workflows.'
        ],
        image: 'assets/logos/q-ai.png',
      }
    ];
}
