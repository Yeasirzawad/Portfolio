import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobTitle = 'Research Analyst | Data Analyst | Statistician';
  name = 'Md. Yeasir Zawad';

  description = 'I turn market research, business intelligence, and statistical analysis into structured insights, dashboards, and decision-ready reporting for teams, founders, and business stakeholders.';

  aboutHighlights = [
    { value: '30+', label: 'research and analytical outputs delivered' },
    { value: '5+', label: 'research, BI, and analytics domains covered' },
    { value: '3', label: 'flagship case studies across market and business analysis' }
  ];

  coreExpertise = [
    'Market Research',
    'Business Intelligence',
    'Statistical Analysis',
    'Competitive Intelligence',
    'Forecasting',
    'Dashboarding',
    'Company Research',
    'Opportunity Assessment'
  ];

  industries = [
    'Market Research & Advisory',
    'Hospitality / Travel',
    'Retail / Grocery',
    'Labor Market / Education',
    'Life Sciences / Commercialization',
    'Consumer & Business Strategy'
  ];

  methods = [
    'TAM / SAM / SOM',
    'SWOT / PESTLE',
    'Porter’s Five Forces',
    'Competitive Benchmarking',
    'Customer Segmentation',
    'Scoring Frameworks'
  ];

  workingStyle = [
    'Define the business question',
    'Structure the analysis',
    'Gather and validate sources',
    'Synthesize patterns and signals',
    'Deliver clear reports or dashboards'
  ];

  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}
