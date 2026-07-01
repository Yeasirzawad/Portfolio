import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Tool {
  name: string;
  iconUrl?: string;
  abbr?: string;
  abbrBg?: string;
  abbrColor?: string;
  darkChip?: boolean; // for tools with light-colored logos (e.g. Power BI yellow)
}

export interface MethodGroup {
  category: string;
  icon: string;
  color: string;      // accent color for border-top and icon
  colorLight: string; // light tint for icon badge background
  skills: string[];
}

const SI = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  toolStack: Tool[] = [
    // Programming
    { name: 'Python', iconUrl: `${SI}/python.svg` },
    { name: 'R', iconUrl: `${SI}/r.svg` },
    // BI & Reporting
    { name: 'Power BI', iconUrl: `${SI}/powerbi.svg`, darkChip: true },
    { name: 'Excel', iconUrl: `${SI}/microsoftexcel.svg` },
    { name: 'Metabase', iconUrl: `${SI}/metabase.svg` },
    { name: 'Power Query', abbr: 'PQ', abbrBg: '#DBEAFE', abbrColor: '#1D4ED8' },
    { name: 'DAX', abbr: 'DAX', abbrBg: '#FEF9C3', abbrColor: '#A16207' },
    // Databases
    { name: 'MySQL', iconUrl: `${SI}/mysql.svg` },
    { name: 'PostgreSQL', iconUrl: `${SI}/postgresql.svg` },
    // Statistical tools (no official icon — polished monograms)
    { name: 'SPSS', abbr: 'SPSS', abbrBg: '#EEF2FF', abbrColor: '#4338CA' },
    { name: 'STATA', abbr: 'STA', abbrBg: '#ECFDF5', abbrColor: '#065F46' },
  ];

  methodGroups: MethodGroup[] = [
    {
      category: 'Statistical Analysis',
      icon: 'fas fa-chart-line',
      color: '#7C3AED',
      colorLight: '#F3EDFF',
      skills: [
        'Regression Analysis', 'Multivariate Analysis', 'Time Series Analysis',
        'A/B Testing', 'ANOVA', 'Predictive Modeling',
        'Hypothesis Testing', 'Cohort Analysis', 'Forecasting'
      ]
    },
    {
      category: 'Market Research',
      icon: 'fas fa-magnifying-glass',
      color: '#0891B2',
      colorLight: '#E0F7FA',
      skills: [
        'Market Sizing', 'Market Forecasting', 'Competitive Analysis',
        'Pricing Diagnostics', 'Customer Segmentation', 'Trend Analysis',
        'Product-Market Fit Analysis'
      ]
    },
    {
      category: 'Visualization & Communication',
      icon: 'fas fa-display',
      color: '#059669',
      colorLight: '#ECFDF5',
      skills: ['Dashboard Design', 'Data Storytelling', 'Executive Reporting', 'Report Writing']
    },
    {
      category: 'AI Research & Productivity',
      icon: 'fas fa-robot',
      color: '#D97706',
      colorLight: '#FFFBEB',
      skills: [
        'Prompt Engineering', 'AI-Assisted Research', 'Custom GPTs',
        'ChatGPT', 'Gemini', 'Perplexity',
        'Claude Code', 'Antigravity', 'IDE', 'CLI'
      ]
    }
  ];
}