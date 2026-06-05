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
  title: 'HMF Express U.S. Market Share & Whitespace Analysis',
  summary: 'Built a U.S.-wide market intelligence and opportunity analysis for HMF Express to quantify market size, territory share, customer wallet penetration, competitor allocation, and whitespace opportunities across the hollow-metal doors and frames market.',
  challenge: 'The business had shipment data, but lacked a decision-ready view of total market potential, HMF share by territory and customer, competitor exposure, and where sales teams should focus. This made it difficult to identify attack markets, defend positions, and prioritize high-value accounts.',
  approach: 'Analyzed multiple Excel-based datasets covering territory market size, HMF shipments, customer spend capacity, fair-share benchmarks, competitor allocation, customer trend labels, and pricing posture. Used Python to validate rankings, concentration metrics, share gaps, whitespace estimates, and opportunity pools, then translated the findings into an executive-ready report structured around sales action categories.',
  outcome: 'Delivered a sales-ready market intelligence framework that quantified a $5.7B U.S. market, identified $36.1M in territory-level whitespace across 8 states, and surfaced $876.0M in customer-level whitespace across 1,190 accounts. The final analysis gave leadership a clear basis to prioritize attack territories, defend stronghold markets, reactivate declining customers, and focus growth efforts on the highest-value opportunities.',
  tools: ['Python', 'Pandas', 'NumPy', 'Excel', 'Market Sizing', 'Whitespace Analysis'],
  link: ''
},
    {
      tag: 'Market Entry Analysis',
      title: 'Airbnb Market Entry Study — Bangladesh',
      summary: 'Evaluated Airbnb expansion viability across Bangladesh by scraping and analysing 1,347 listings, 4,608 reviews, and 613 host profiles to identify the strongest entry market.',
      challenge: 'The client needed to determine whether Dhaka, Chittagong, or Cox\'s Bazar offered the most favourable unit economics and competitive landscape for a short-term rental investment.',
      approach: 'Designed a multi-stage scraping pipeline to capture listing attributes, host performance metrics, and guest sentiment, then built a Power BI competitive analysis model segmenting by occupancy rate, average daily rate, and review velocity.',
      outcome: 'Dhaka emerged as the clear entry market with 42% higher review density and 18% stronger occupancy rates than alternatives. The client used the report to scope an initial portfolio of 12 properties.',
      tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'Power Query', "Data Modeling", 'DAX'],
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
    },
    {
  tag: 'Market Research',
  title: 'Aggie Square Tenant Targeting & Readiness Dashboard',
  summary: 'Built a multi-phase tenant targeting solution for Wexford Connect Labs by combining commercialization research, multi-factor scoring, and a Power BI dashboard to identify and prioritize high-potential life sciences companies for Aggie Square.',
  challenge: 'The client lacked a structured and repeatable way to identify high-fit tenant companies. Early target lists overemphasized obvious large pharmaceutical players while failing to surface emerging and mid-tier companies with stronger near-term fit across UC Davis IP alignment, infrastructure needs, growth signals, and relationship potential.',
  approach: 'Developed a baseline commercialization mapping report of UC Davis assets, then built a weighted scoring framework across five dimensions including IP alignment, infrastructure fit, growth and PR signals, clinical validation, and relational strength. Translated the logic into a Power BI dashboard with tiering, filtering, and comparison views to support outreach prioritization and strategic decision-making.',
  outcome: 'Delivered two client-facing reports and an interactive dashboard that turned fragmented research inputs into a clear tenant prioritization system. The final framework improved visibility into company fit, enabled comparison across dozens of companies and five scoring dimensions, and created a scalable foundation for future lead refreshes and outreach planning.',
  tools: ['Power BI', 'DAX', 'Excel', 'Google Sheets', 'Power Query'],
  link: ''
},
{
  tag: 'Impact Evaluation',
  title: 'Post-COVID-19 Livelihood Recovery Endline Evaluation',
  summary: 'Analyzed mixed-method endline data for a livelihood recovery intervention in Ramu, Cox’s Bazar to assess changes in income, agricultural practices, women’s empowerment, financial inclusion, and community resilience.',
  challenge: 'The evaluation needed to determine whether a multi-component livelihood recovery project had produced measurable improvements across income, agriculture, food security, women’s participation, financial access, and disaster preparedness for vulnerable households affected by COVID-19 and related shocks.',
  approach: 'Worked with 330 household surveys alongside 8 FGDs, 19 KIIs, 5 IDIs, and 3 case studies. Used SPSS, Excel, Power Query, and Power BI to clean survey data, compare baseline and endline indicators, synthesize qualitative findings, and translate the results into indicator-based evaluation reporting aligned with development-sector criteria.',
  outcome: 'Delivered an evidence-based endline evaluation that showed a 59% increase in mean household income, agricultural technology adoption rising from 32% to 98%, homestead gardening increasing from 31% to 94%, and rights awareness improving from 8% to 99%. The final analysis helped demonstrate project effectiveness and provided clear findings to guide future livelihood and resilience programming.',
  tools: ['SPSS', 'Excel', 'Power Query', 'Power BI', 'DAX', 'KoBoToolbox'],
  link: ''
},
{
  tag: 'Intellectual Property Research',
  title: 'Decode Age IP Validation, Competitive Intelligence & Commercial Readiness Analysis',
  summary: 'Built a strategic IP validation and competitive intelligence framework for Decode Age’s microbiome platform by combining patent landscape analysis, competitor dossiers, technical reproducibility review, and commercialization assessment.',
  challenge: 'The business needed a clearer answer on which parts of the platform were genuinely defensible, where competitors could replicate or bypass value, which product lines were most exposed, and where IP or commercialization spend would compound value rather than leak capital.',
  approach: 'Analyzed 174 patent documents consolidated into 162 unique patent families, classified them into Decode Age-relevant asset buckets, and assessed 21 direct and adjacent competitors across replication pathways, bypass routes, product overlap, and revenue impact. Structured the findings into a board-ready report covering IP economics, technical reproducibility, data monetization, geographic capital efficiency, product revenue readiness, and action sequencing.',
  outcome: 'Delivered a decision-grade strategic report that evaluated 162 patent families and 21 competitors across multiple risk and defensibility dimensions, helping convert a complex microbiome technology narrative into clear IP priorities, replication-risk zones, product-line exposure signals, and 12/24/36-month action pathways for leadership decision-making.',
  tools: ['Python', 'Lens.org', 'Excel', 'Google Sheets', 'Patent Landscape Analysis', 'Competitive Intelligence'],
  link: ''
},
{
      tag: 'Market Intelligence',
      title: 'US Data Careers Job Market Analysis',
      summary: 'Scraped 11,290 job postings to uncover hiring trends, salary benchmarks, and in-demand skills across data-driven roles in the United States.',
      challenge: 'There was no consolidated, up-to-date view of how demand for data roles varied by location, seniority, or required stack — making it hard for job seekers or hiring managers to benchmark effectively.',
      approach: 'Built a Python + Selenium scraper targeting Indeed, cleaned and structured 11,290 postings and 4,989 company records, then modeled the data in Power BI with DAX measures for salary ranges, skill frequency heatmaps, and role-level comparisons.',
      outcome: 'Delivered an interactive Power BI dashboard that reduced research time by ~70% compared to manual job board browsing and surfaced clear insight that SQL + Python proficiency commanded a 23% salary premium over single-language candidates.',
      tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'DAX'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTQ5MDc4NjAtYzI0ZS00YTRjLWE4NGEtODgxMzY4Yjc2ZGI2IiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=8261f97ece42040ada0a'
    }
  ];
}
