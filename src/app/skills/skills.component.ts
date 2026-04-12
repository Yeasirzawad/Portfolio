import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Programming',
      skills: ['Python', 'R', 'SQL']
    },
    {
      category: 'Business Intelligence & Reporting',
      skills: ['Power BI', "Excel", "Metabase", 'Power Query', 'DAX']
    },
    {
      category: 'Statistical & Data Analysis',
      skills: [
        'Regression Analysis',
        'Time Series Analysis',
        'A/B Testing',
        'Predictive Modeling',
        'Hypothesis Testing',
        'Cohort Analysis',
        'Forecasting'
      ]
    },
    {
      category: 'Market Research',
      skills: [,
        'Market Sizing',
        'Market Forecasting',
        'Competitive Analysis',
        'Pricing Diagnostics',
        'Customer Segmentation',
        'Product-Market Fit Analysis',
        'Trend Analysis'
      ]
    },
    {
      category: 'Databases & Research Tools',
      skills: ['MySQL', 'PostgreSQL', 'SPSS', 'STATA']
    },
    {
      category: 'Visualization & Communication',
      skills: [
        'Dashboard Design',
        'Data Storytelling',
        'Executive Reporting',
        'Report Writing'
      ]
    },
    {
      category: 'Project & Workflow Tools',
      skills: ['Trello', 'Confluence', 'Slack']
    },
    {
      category: 'AI Research & Productivity Tools',
      skills: [
        'ChatGPT',
        'Perplexity',
        'Gemini',
        'Kimi',
        'Gamma',
        'Custom GPTs',
        'AI-Assisted Research',
        'Prompt Engineering'
      ]
    }
  ];
}