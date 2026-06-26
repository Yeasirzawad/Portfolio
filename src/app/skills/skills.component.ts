import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  coreGroups: SkillGroup[] = [
    {
      category: 'Programming',
      icon: 'fas fa-code',
      skills: ['Python', 'R', 'SQL']
    },
    {
      category: 'Business Intelligence & Reporting',
      icon: 'fas fa-chart-bar',
      skills: ['Power BI', 'Excel', 'Metabase', 'Power Query', 'DAX']
    },
    {
      category: 'Statistical & Data Analysis',
      icon: 'fas fa-square-root-variable',
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
      category: 'Databases & Research Tools',
      icon: 'fas fa-database',
      skills: ['MySQL', 'PostgreSQL', 'SPSS', 'STATA']
    }
  ];

  methodGroups: SkillGroup[] = [
    {
      category: 'Market Research',
      icon: 'fas fa-magnifying-glass-chart',
      skills: [
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
      category: 'Visualization & Communication',
      icon: 'fas fa-display',
      skills: [
        'Dashboard Design',
        'Data Storytelling',
        'Executive Reporting',
        'Report Writing'
      ]
    },
    {
      category: 'AI Research & Productivity',
      icon: 'fas fa-robot',
      skills: [
        'ChatGPT',
        'Perplexity',
        'Gemini',
        'Custom GPTs',
        'AI-Assisted Research',
        'Prompt Engineering'
      ]
    }
  ];

  workflowTools: string[] = ['Trello', 'Confluence', 'Slack', 'Kimi', 'Gamma'];
}