import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Md. Yeasir Zawad';

  roleTitles = [
    'Microsoft Certified Data Analyst',
    'Statistician',
    'Research Analyst'
  ];

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

  decisionOutputs = [
    'Market and company research reports',
    'Competitive landscapes',
    'Forecasting and trend summaries',
    'Power BI dashboards',
    'Pricing and opportunity diagnostics',
    'Stakeholder-ready presentation insights'
  ];

  workflowSteps = [
    {
      title: 'Frame the question',
      detail: 'Clarify the objective, audience, scope, and decision the work needs to support.'
    },
    {
      title: 'Structure the analysis',
      detail: 'Translate the problem into a clear outline, logic flow, and research plan.'
    },
    {
      title: 'Collect and validate',
      detail: 'Gather source-backed information, compare signals, and clean the evidence base.'
    },
    {
      title: 'Analyze the patterns',
      detail: 'Use statistical thinking, market context, and BI logic to find what matters.'
    },
    {
      title: 'Deliver the story',
      detail: 'Convert findings into reports, dashboards, summaries, and decision-ready narratives.'
    }
  ];

  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}
