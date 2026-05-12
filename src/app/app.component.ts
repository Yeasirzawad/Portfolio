import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  name = 'Md. Yeasir Zawad';

  roleTitles = [
    'Microsoft Certified Data Analyst',
    'Statistician',
    'Research Analyst'
  ];

  description = 'I turn market research, business intelligence, and statistical analysis into structured insights, dashboards, and decision-ready reporting for teams, founders, and business stakeholders.';

  aboutHighlights = [
    { value: '35+', label: 'research and analytical outputs delivered' },
    { value: '5+', label: 'research, BI, and analytics domains covered' },
    { value: '10+', label: 'flagship case studies across market and business analysis' }
  ];

  coreExpertise = [
    'Market Research',
    'Business Intelligence',
    'Statistical Analysis',
    'Company Research',
    "Forecasting and Trend Analysis",
    'Competitive Intelligence',
    "Dashboard Reporting","Data Storytelling","Stakeholder Communication"];

  industries = [
    'FMCG & Consumer Markets',
    'Hospitality / Travel',
    'Healthcare & Life Sciences',
    'Private Equity & M&A',
    'Automotive & Mobility'
  ];

  Research Deliverables = [
    'Market and company research reports',
    'Competitive landscape reports',
    "Company & Financial Due diligence reports",
    "M&A research briefs",
    'Forecasting and trend summaries',
    'Power BI dashboards',
    'Pricing and opportunity diagnostics',
    'Stakeholder-ready presentations'
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
  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    setTimeout(() => this.setupScrollReveal(), 120);
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }

  scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }

  private setupScrollReveal(): void {
    const revealSelectors = [
      '.content-section .section-heading',
      '.about-intro-panel',
      '.about-highlight',
      '.about-snapshot-card',
      '.workflow-panel',
      '.workflow-flow li',
      '.timeline-item',
      '.skill-card',
      '.project-card',
      '.cs-intro',
      '.cs-card',
      '.education-card',
      '.cert-card',
      '.contact-left',
      '.contact-right'
    ].join(', ');

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 7, 6) * 85}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -14% 0px'
      }
    );

    revealItems.forEach((item) => this.revealObserver?.observe(item));
  }
}
