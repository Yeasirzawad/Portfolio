import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseStudy {
  tag: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tools: string[];
  link?: string;
}

@Component({
  selector: 'case-study',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  expandedIndex: number | null = null;

  toggle(i: number) {
    this.expandedIndex = this.expandedIndex === i ? null : i;
  }

  caseStudies: CaseStudy[] = [
    {
      tag: 'Market Intelligence',
      title: 'US Data Careers Job Market Analysis',
      summary: 'Scraped 11,290 job postings to uncover hiring trends, salary benchmarks, and in-demand skills across data-driven roles in the United States.',
      challenge: 'There was no consolidated, up-to-date view of how demand for data roles varied by location, seniority, or required stack — making it hard for job seekers or hiring managers to benchmark effectively.',
      approach: 'Built a Python + Selenium scraper targeting Indeed, cleaned and structured 11,290 postings and 4,989 company records, then modeled the data in Power BI with DAX measures for salary ranges, skill frequency heatmaps, and role-level comparisons.',
      outcome: 'Delivered an interactive Power BI dashboard that reduced research time by ~70% compared to manual job board browsing and surfaced clear insight that SQL + Python proficiency commanded a 23% salary premium over single-language candidates.',
      tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'DAX'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTQ5MDc4NjAtYzI0ZS00YTRjLWE4NGEtODgxMzY4Yjc2ZGI2IiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=8261f97ece42040ada0a'
    },
    {
      tag: 'Market Entry Analysis',
      title: 'Airbnb Market Entry Study — Bangladesh',
      summary: 'Evaluated Airbnb expansion viability across Bangladesh by scraping and analysing 1,347 listings, 4,608 reviews, and 613 host profiles to identify the strongest entry market.',
      challenge: 'The client needed to determine whether Dhaka, Chittagong, or Cox\'s Bazar offered the most favourable unit economics and competitive landscape for a short-term rental investment.',
      approach: 'Designed a multi-stage scraping pipeline to capture listing attributes, host performance metrics, and guest sentiment, then built a Power BI competitive analysis model segmenting by occupancy rate, average daily rate, and review velocity.',
      outcome: 'Dhaka emerged as the clear entry market with 42% higher review density and 18% stronger occupancy rates than alternatives. The client used the report to scope an initial portfolio of 12 properties.',
      tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'DAX'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZGZmMTA2YjUtZjk5YS00YjZjLWJmMmYtM2E1ZDQxZTI2MDAyIiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=d51523c1ba67c0c9cc96'
    },
    {
      tag: 'Business Intelligence',
      title: 'Customer Cohort & Market Performance Dashboard',
      summary: 'Consolidated four regional reports for a multinational grocery chain into a single Power BI view, cutting reporting preparation time by 65%.',
      challenge: 'The finance and operations teams were maintaining four separate Excel-based reports across Canada, Mexico, and the US — creating version-control issues, 5+ hours of manual preparation per cycle, and inconsistent KPI definitions.',
      approach: 'Unified all data sources through a single Power Query ETL layer with a shared data model, standardised KPI logic across regions, and designed a cohort analysis module to track customer retention and basket growth over rolling 12-month windows.',
      outcome: 'Reduced reporting prep time by 65%, eliminated manual spreadsheet reconciliation entirely, and enabled the VP of Operations to conduct cross-regional performance reviews in under 30 minutes.',
      tools: ['Power BI', 'Power Query', 'DAX', 'Cohort Analysis', 'ETL']
    }
  ];
}
