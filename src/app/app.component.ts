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

  impactStats = [
    {
      value: '30+',
      label: 'Research & analytical reports delivered',
      detail: 'Market intelligence, competitive analysis, forecasting, pricing, and GTM support.'
    },
    {
      value: '3',
      label: 'Flagship case studies',
      detail: 'Market entry, job market intelligence, and business performance analytics.'
    },
    {
      value: '5+',
      label: 'Core analytics domains',
      detail: 'Research, BI, statistics, dashboards, market sizing, and forecasting.'
    },
    {
      value: '2+ yrs',
      label: 'Research & data analytics experience',
      detail: 'Hands-on work across client-facing research, reporting, and analysis.'
    }
  ];

  frameworks = [
    {
      title: 'Market Sizing',
      detail: 'TAM, SAM, SOM, opportunity mapping, and demand-side assessment.'
    },
    {
      title: 'Competitive Benchmarking',
      detail: 'Comparison of players across positioning, offerings, pricing, and market signals.'
    },
    {
      title: 'Forecasting',
      detail: 'Trend-based and structured forecasting for market and business planning.'
    },
    {
      title: 'Segmentation',
      detail: 'Customer, market, and opportunity segmentation for clearer decision support.'
    },
    {
      title: 'Strategic Analysis',
      detail: 'SWOT, PESTLE, Porter’s Five Forces, and structured research frameworks.'
    },
    {
      title: 'Scoring Models',
      detail: 'Multi-factor evaluation models for prioritization, fit, and opportunity ranking.'
    }
  ];

  workflowSteps = [
    {
      step: '01',
      title: 'Understand the objective',
      detail: 'Clarify the business question, audience, scope, and expected output.'
    },
    {
      step: '02',
      title: 'Structure the analysis',
      detail: 'Build the logic, outline, data needs, and working report framework.'
    },
    {
      step: '03',
      title: 'Generate research questions',
      detail: 'Break the problem into focused questions that guide evidence collection.'
    },
    {
      step: '04',
      title: 'Gather and validate inputs',
      detail: 'Collect source-backed information and compare multiple signals.'
    },
    {
      step: '05',
      title: 'Analyze and synthesize',
      detail: 'Turn raw findings into patterns, narratives, metrics, and implications.'
    },
    {
      step: '06',
      title: 'Deliver decision-ready outputs',
      detail: 'Create reports, dashboards, summaries, and visual storytelling for stakeholders.'
    }
  ];

  isMenuOpen = false;

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}
