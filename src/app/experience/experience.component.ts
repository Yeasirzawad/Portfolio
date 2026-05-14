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
        details: [ "Lead market and enterprise research across multiple industries, turning complex data into clear business insights.",
          "Analyze market, consumer, and competitive data to generate insights that support business planning, growth strategy, and decision-making.",
          "Delivered 35+ analytical reports across market research, consumer insights, forecasting, pricing diagnostics, due diligence, and go-to-market strategy, turning complex business information into clear business decision.",
        "Conduct competitor benchmarking, market trend analysis, and secondary research to identify market opportunities, risks, and strategic directions.",
        "Support business development through proposal writing, research scoping, and client/investor communication.",
        "Collaborate with cross-functional teams to gather inputs, organize findings, and improve reporting, documentation, and research workflows.",
        "Used AI-assisted research workflows with ChatGPT, Perplexity, Claude/Gemini, and custom GPTs to speed up research and report development, reducing early-stage preparation effort by 40%."
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
