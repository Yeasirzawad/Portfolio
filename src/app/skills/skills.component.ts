import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tool {
  name: string;
  iconUrl?: string;
  abbr?: string;
  abbrBg?: string;
  abbrColor?: string;
}

export interface MethodGroup {
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

  toolStack: Tool[] = [
    { name: 'Python',      iconUrl: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'R',           iconUrl: 'https://cdn.simpleicons.org/r/276DC3' },
    { name: 'SQL',         abbr: 'SQL',  abbrBg: '#E8F0FE', abbrColor: '#1a73e8' },
    { name: 'Power BI',    iconUrl: 'https://cdn.simpleicons.org/powerbi/F2C811' },
    { name: 'Excel',       iconUrl: 'https://cdn.simpleicons.org/microsoftexcel/217346' },
    { name: 'Metabase',    iconUrl: 'https://cdn.simpleicons.org/metabase/509EE3' },
    { name: 'Power Query', abbr: 'PQ',   abbrBg: '#E3F2FD', abbrColor: '#0078D4' },
    { name: 'DAX',         abbr: 'DAX',  abbrBg: '#FFF8E1', abbrColor: '#E6A817' },
    { name: 'MySQL',       iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'PostgreSQL',  iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1' },
    { name: 'SPSS',        abbr: 'SPSS', abbrBg: '#E8EAF6', abbrColor: '#3949AB' },
    { name: 'STATA',       abbr: 'STA',  abbrBg: '#E8EAF6', abbrColor: '#1A237E' },
  ];

  methodGroups: MethodGroup[] = [
    {
      category: 'Statistical Analysis',
      icon: 'fas fa-chart-line',
      skills: ['Regression Analysis', 'Time Series Analysis', 'A/B Testing', 'Predictive Modeling', 'Hypothesis Testing', 'Cohort Analysis', 'Forecasting']
    },
    {
      category: 'Market Research',
      icon: 'fas fa-magnifying-glass',
      skills: ['Market Sizing', 'Market Forecasting', 'Competitive Analysis', 'Pricing Diagnostics', 'Customer Segmentation', 'Product-Market Fit Analysis', 'Trend Analysis']
    },
    {
      category: 'Visualization & Communication',
      icon: 'fas fa-display',
      skills: ['Dashboard Design', 'Data Storytelling', 'Executive Reporting', 'Report Writing']
    },
    {
      category: 'AI Research & Productivity',
      icon: 'fas fa-robot',
      skills: ['Prompt Engineering', 'AI-Assisted Research', 'Custom GPTs', 'ChatGPT', 'Gemini', 'Perplexity']
    },
    {
      category: 'Workflow & Collaboration',
      icon: 'fas fa-layer-group',
      skills: ['Trello', 'Confluence', 'Slack', 'Kimi', 'Gamma']
    }
  ];
}