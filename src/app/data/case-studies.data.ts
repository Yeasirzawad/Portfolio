export interface Metric {
  value: string;
  label: string;
  note?: string;
}

export interface BeforeAfter {
  before: string[];
  after: string[];
}

export interface CaseStudy {
  tag: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: Metric[];
  challenge: string;
  solution: string;
  approach: string;
  outcome: string;
  beforeAfter: BeforeAfter;
  tools: string[];
  link?: string;
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'Market Intelligence',
    slug: 'hmf-market-share-whitespace-analysis',
    title: 'HMF Express U.S. Market Share & Whitespace Analysis',
    subtitle: 'Market sizing and territory-level opportunity analysis',
    summary: 'Built a U.S.-wide market intelligence and opportunity analysis for HMF Express to quantify market size, territory share, customer wallet penetration, competitor allocation, and whitespace opportunities across the hollow-metal doors and frames market.',
    metrics: [
      { value: '$5.7B', label: 'Total U.S. Market Size', note: 'Hollow-metal doors and frames' },
      { value: '$36.1M', label: 'Territory-Level Whitespace', note: 'Across 8 key states' },
      { value: '$876.0M', label: 'Customer-Level Whitespace', note: 'Across 1,190 accounts' }
    ],
    challenge: 'The business had shipment data, but lacked a decision-ready view of total market potential, HMF share by territory and customer, competitor exposure, and where sales teams should focus. This made it difficult to identify attack markets, defend positions, and prioritize high-value accounts.',
    solution: 'Developed a unified market intelligence framework that consolidated territorial benchmarks, customer spending capacity, and competitor allocation into a single sales-ready view. Translated complex market data into prioritized action categories for leadership.',
    approach: 'Analyzed multiple Excel-based datasets covering territory market size, HMF shipments, customer spend capacity, fair-share benchmarks, competitor allocation, customer trend labels, and pricing posture. Used Python to validate rankings, concentration metrics, share gaps, whitespace estimates, and opportunity pools, then translated the findings into an executive-ready report structured around sales action categories.',
    outcome: 'Delivered a sales-ready market intelligence framework that quantified a $5.7B U.S. market, identified $36.1M in territory-level whitespace across 8 states, and surfaced $876.0M in customer-level whitespace across 1,190 accounts. The final analysis gave leadership a clear basis to prioritize attack territories, defend stronghold markets, reactivate declining customers, and focus growth efforts on the highest-value opportunities.',
    beforeAfter: {
      before: [
        'Sales teams using disconnected regional reports and incomplete shipment data',
        'No visibility into territory-level market share or customer wallet penetration',
        'Unclear prioritization of attack markets, defense zones, and opportunity accounts',
        'Limited ability to quantify whitespace or benchmark competitive positioning'
      ],
      after: [
        'Single source of truth for $5.7B market view and HMF positioning',
        'Clear territory and account-level opportunity identification and prioritization',
        '$36.1M in identified whitespace across 8 key states ready for sales action',
        'Data-driven playbook for market capture and customer reactivation strategy'
      ]
    },
    tools: ['Python', 'Pandas', 'NumPy', 'Excel', 'Market Sizing', 'Whitespace Analysis'],
    featured: true
  },
  {
    tag: 'Market Entry Analysis',
    slug: 'airbnb-market-entry-study-bangladesh',
    title: 'Airbnb Market Entry Study — Bangladesh',
    subtitle: 'Competitive analysis and market viability assessment',
    summary: 'Evaluated Airbnb expansion viability across Bangladesh by scraping and analysing 1,347 listings, 4,608 reviews, and 613 host profiles to identify the strongest entry market.',
    metrics: [
      { value: '1,347', label: 'Listings Analyzed', note: 'Across all Bangladesh markets' },
      { value: '42%', label: 'Higher Review Density', note: 'Dhaka vs alternatives' },
      { value: '12', label: 'Initial Portfolio Size', note: 'For recommended market' }
    ],
    challenge: 'The client needed to determine whether Dhaka, Chittagong, or Cox\'s Bazar offered the most favourable unit economics and competitive landscape for a short-term rental investment.',
    solution: 'Designed a multi-stage data collection and analysis pipeline to capture listing attributes, host performance metrics, and guest sentiment at scale, then translated raw data into competitive positioning benchmarks.',
    approach: 'Designed a multi-stage scraping pipeline to capture listing attributes, host performance metrics, and guest sentiment, then built a Power BI competitive analysis model segmenting by occupancy rate, average daily rate, and review velocity.',
    outcome: 'Dhaka emerged as the clear entry market with 42% higher review density and 18% stronger occupancy rates than alternatives. The client used the report to scope an initial portfolio of 12 properties.',
    beforeAfter: {
      before: [
        'No structured market analysis across Bangladesh short-term rental landscape',
        'Uncertain market potential and competitive intensity in each city',
        'Inability to compare unit economics across Dhaka, Chittagong, and Cox\'s Bazar',
        'Risk of expanding into suboptimal market with unclear demand signals'
      ],
      after: [
        'Data-backed market analysis covering 1,347 listings across Bangladesh',
        'Clear market viability assessment with competitive intensity benchmarks',
        'Dhaka identified with 42% higher review density than alternatives',
        'Client moved forward with 12-property portfolio in recommended market'
      ]
    },
    tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'DAX'],
    link: 'https://app.powerbi.com/view?r=eyJrIjoiZGZmMTA2YjUtZjk5YS00YjZjLWJmMmYtM2E1ZDQxZTI2MDAyIiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=d51523c1ba67c0c9cc96',
    featured: true
  },
  {
    tag: 'Business Intelligence',
    slug: 'customer-cohort-market-performance-dashboard',
    title: 'Customer Cohort & Market Performance Dashboard',
    subtitle: 'Multi-region reporting consolidation and automation',
    summary: 'Consolidated four regional reports for a multinational grocery chain into a single Power BI view, cutting reporting preparation time by 65%.',
    metrics: [
      { value: '65%', label: 'Reduction in Prep Time', note: 'Per reporting cycle' },
      { value: '4', label: 'Reports Unified', note: 'Canada, Mexico, US regions' },
      { value: '5+', label: 'Hours Saved', note: 'Manual work eliminated per cycle' }
    ],
    challenge: 'The finance and operations teams were maintaining four separate Excel-based reports across Canada, Mexico, and the US — creating version-control issues, 5+ hours of manual preparation per cycle, and inconsistent KPI definitions.',
    solution: 'Built a unified data architecture with a single ETL layer and standardized KPI logic, enabling finance to conduct cross-regional reviews in 30 minutes instead of hours.',
    approach: 'Unified all data sources through a single Power Query ETL layer with a shared data model, standardised KPI logic across regions, and designed a cohort analysis module to track customer retention and basket growth over rolling 12-month windows.',
    outcome: 'Reduced reporting prep time by 65%, eliminated manual spreadsheet reconciliation entirely, and enabled the VP of Operations to conduct cross-regional performance reviews in under 30 minutes.',
    beforeAfter: {
      before: [
        'Four separate Excel-based regional reports with inconsistent KPI definitions',
        'Manual data entry and 5+ hours of reconciliation per reporting cycle',
        'Version-control issues and duplication of analytical work',
        'Unable to conduct fast cross-regional performance comparisons'
      ],
      after: [
        'Single Power BI dashboard with unified data model across all regions',
        '65% reduction in preparation time per reporting cycle',
        'Automated ETL pipeline eliminating manual reconciliation',
        'VP can conduct cross-regional reviews in under 30 minutes'
      ]
    },
    tools: ['Power BI', 'Power Query', 'DAX', 'Cohort Analysis', 'ETL'],
    featured: true
  },
  {
    tag: 'Market Research',
    slug: 'aggie-square-tenant-targeting-readiness',
    title: 'Aggie Square Tenant Targeting & Readiness Dashboard',
    subtitle: 'Multi-factor company scoring and strategic prioritization',
    summary: 'Built a multi-phase tenant targeting solution for Wexford Connect Labs by combining commercialization research, multi-factor scoring, and a Power BI dashboard to identify and prioritize high-potential life sciences companies for Aggie Square.',
    metrics: [
      { value: '2', label: 'Client-Facing Reports', note: 'Commercialization + scoring' },
      { value: '5', label: 'Scoring Dimensions', note: 'IP, infrastructure, growth, validation, relations' },
      { value: '50+', label: 'Companies Evaluated', note: 'With tiering and comparison' }
    ],
    challenge: 'The client lacked a structured and repeatable way to identify high-fit tenant companies. Early target lists overemphasized obvious large pharmaceutical players while failing to surface emerging and mid-tier companies with stronger near-term fit across UC Davis IP alignment, infrastructure needs, growth signals, and relationship potential.',
    solution: 'Developed a weighted scoring framework across five dimensions including IP alignment, infrastructure fit, growth signals, clinical validation, and relational strength. Translated the logic into a Power BI dashboard with tiering, filtering, and comparison views to support outreach prioritization.',
    approach: 'Developed a baseline commercialization mapping report of UC Davis assets, then built a weighted scoring framework across five dimensions including IP alignment, infrastructure fit, growth and PR signals, clinical validation, and relational strength. Translated the logic into a Power BI dashboard with tiering, filtering, and comparison views to support outreach prioritization and strategic decision-making.',
    outcome: 'Delivered two client-facing reports and an interactive dashboard that turned fragmented research inputs into a clear tenant prioritization system. The final framework improved visibility into company fit, enabled comparison across dozens of companies and five scoring dimensions, and created a scalable foundation for future lead refreshes and outreach planning.',
    beforeAfter: {
      before: [
        'No structured approach to tenant identification and prioritization',
        'Focus on obvious large pharma players while missing emerging opportunities',
        'Fragmented research inputs without unified scoring framework',
        'Manual, non-repeatable process for lead identification'
      ],
      after: [
        'Structured 5-factor scoring framework with clear fit criteria',
        'Dashboard enabling comparison across 50+ companies and dimensions',
        'Emerging and mid-tier companies surfaced with equal weighting',
        'Scalable, repeatable system for future lead refreshes and outreach'
      ]
    },
    tools: ['Power BI', 'DAX', 'Excel', 'Google Sheets', 'Power Query'],
    featured: false
  },
  {
    tag: 'Impact Evaluation',
    slug: 'post-covid-livelihood-recovery-endline',
    title: 'Post-COVID-19 Livelihood Recovery Endline Evaluation',
    subtitle: 'Mixed-method household livelihood and resilience assessment',
    summary: 'Analyzed mixed-method endline data for a livelihood recovery intervention in Ramu, Cox\'s Bazar to assess changes in income, agricultural practices, women\'s empowerment, financial inclusion, and community resilience.',
    metrics: [
      { value: '59%', label: 'Income Increase', note: 'Mean household income growth' },
      { value: '98%', label: 'Tech Adoption', note: 'Agricultural technology from 32%' },
      { value: '330', label: 'Households Surveyed', note: 'Plus 27 qualitative interviews' }
    ],
    challenge: 'The evaluation needed to determine whether a multi-component livelihood recovery project had produced measurable improvements across income, agriculture, food security, women\'s participation, financial access, and disaster preparedness for vulnerable households affected by COVID-19 and related shocks.',
    solution: 'Combined household surveys with qualitative research (FGDs, KIIs, IDIs, case studies) to assess multi-dimensional livelihood improvements. Used advanced statistical analysis to isolate project impact from external factors.',
    approach: 'Worked with 330 household surveys alongside 8 FGDs, 19 KIIs, 5 IDIs, and 3 case studies. Used SPSS, Excel, Power Query, and Power BI to clean survey data, compare baseline and endline indicators, synthesize qualitative findings, and translate the results into indicator-based evaluation reporting aligned with development-sector criteria.',
    outcome: 'Delivered an evidence-based endline evaluation that showed a 59% increase in mean household income, agricultural technology adoption rising from 32% to 98%, homestead gardening increasing from 31% to 94%, and rights awareness improving from 8% to 99%. The final analysis helped demonstrate project effectiveness and provided clear findings to guide future livelihood and resilience programming.',
    beforeAfter: {
      before: [
        'Unclear project effectiveness across livelihood and resilience dimensions',
        'Baseline and endline data without statistical comparison framework',
        'Limited qualitative context to explain quantitative findings',
        'Unstructured evaluation findings without clear policy implications'
      ],
      after: [
        'Evidence-based demonstration of project effectiveness across 8 indicators',
        '59% income increase with clear before/after household-level comparisons',
        'Mixed-method analysis showing pathways from agricultural tech to income growth',
        'Clear evidence brief for future livelihood programming and donor reporting'
      ]
    },
    tools: ['SPSS', 'Excel', 'Power Query', 'Power BI', 'DAX', 'KoBoToolbox'],
    featured: false
  },
  {
    tag: 'Intellectual Property Research',
    slug: 'decode-age-ip-validation-competitive-intelligence',
    title: 'Decode Age IP Validation, Competitive Intelligence & Commercial Readiness Analysis',
    subtitle: 'Patent landscape and commercialization risk assessment',
    summary: 'Built a strategic IP validation and competitive intelligence framework for Decode Age\'s microbiome platform by combining patent landscape analysis, competitor dossiers, technical reproducibility review, and commercialization assessment.',
    metrics: [
      { value: '162', label: 'Patent Families Analyzed', note: 'From 174 patent documents' },
      { value: '21', label: 'Competitors Evaluated', note: 'Direct and adjacent markets' },
      { value: '12/24/36', label: 'Month Action Pathways', note: 'Sequenced for capital efficiency' }
    ],
    challenge: 'The business needed a clearer answer on which parts of the platform were genuinely defensible, where competitors could replicate or bypass value, which product lines were most exposed, and where IP or commercialization spend would compound value rather than leak capital.',
    solution: 'Conducted comprehensive patent landscape analysis and competitive assessment to map IP defensibility zones, replication risks, and product-line exposure. Translated technical findings into board-ready strategic recommendations.',
    approach: 'Analyzed 174 patent documents consolidated into 162 unique patent families, classified them into Decode Age-relevant asset buckets, and assessed 21 direct and adjacent competitors across replication pathways, bypass routes, product overlap, and revenue impact. Structured the findings into a board-ready report covering IP economics, technical reproducibility, data monetization, geographic capital efficiency, product revenue readiness, and action sequencing.',
    outcome: 'Delivered a decision-grade strategic report that evaluated 162 patent families and 21 competitors across multiple risk and defensibility dimensions, helping convert a complex microbiome technology narrative into clear IP priorities, replication-risk zones, product-line exposure signals, and 12/24/36-month action pathways for leadership decision-making.',
    beforeAfter: {
      before: [
        'Complex microbiome technology narrative without clear IP defensibility assessment',
        'Unclear replication risks across product lines and competitor landscape',
        'No prioritized action roadmap for IP or commercialization spending',
        'Difficulty communicating defensibility and revenue-readiness to board'
      ],
      after: [
        'Board-ready IP landscape assessment of 162 patent families',
        'Clear mapping of defensible zones, replication risks, and product exposure',
        '12/24/36-month action pathway with capital efficiency sequencing',
        'Strategic recommendations for product prioritization and go-to-market'
      ]
    },
    tools: ['Python', 'Lens.org', 'Excel', 'Google Sheets', 'Patent Landscape Analysis', 'Competitive Intelligence'],
    featured: false
  },
  {
    tag: 'Market Intelligence',
    slug: 'us-data-careers-job-market-analysis',
    title: 'US Data Careers Job Market Analysis',
    subtitle: 'Talent market trends and compensation benchmarking',
    summary: 'Scraped 11,290 job postings to uncover hiring trends, salary benchmarks, and in-demand skills across data-driven roles in the United States.',
    metrics: [
      { value: '11,290', label: 'Job Postings Analyzed', note: 'Across data-driven roles' },
      { value: '23%', label: 'Salary Premium', note: 'SQL + Python vs single skill' },
      { value: '70%', label: 'Research Time Savings', note: 'vs manual job board browsing' }
    ],
    challenge: 'There was no consolidated, up-to-date view of how demand for data roles varied by location, seniority, or required stack — making it hard for job seekers or hiring managers to benchmark effectively.',
    solution: 'Built a comprehensive job market analysis pipeline combining data collection, skill extraction, and salary benchmarking. Created an interactive dashboard enabling real-time market intelligence on hiring trends and compensation.',
    approach: 'Built a Python + Selenium scraper targeting Indeed, cleaned and structured 11,290 postings and 4,989 company records, then modeled the data in Power BI with DAX measures for salary ranges, skill frequency heatmaps, and role-level comparisons.',
    outcome: 'Delivered an interactive Power BI dashboard that reduced research time by ~70% compared to manual job board browsing and surfaced clear insight that SQL + Python proficiency commanded a 23% salary premium over single-language candidates.',
    beforeAfter: {
      before: [
        'Manual job board browsing with no systematic market view',
        'Unclear salary benchmarks across roles, locations, and skill combinations',
        'Difficult to identify in-demand skill combinations and compensation impact',
        'Time-consuming process for job seekers and hiring managers'
      ],
      after: [
        'Interactive dashboard with 11,290 job postings and salary data',
        'Clear compensation benchmarks by role, location, and skill stack',
        '23% salary premium identified for SQL + Python proficiency',
        '70% time savings compared to manual research methods'
      ]
    },
    tools: ['Python', 'Selenium', 'Pandas', 'Power BI', 'DAX'],
    link: 'https://app.powerbi.com/view?r=eyJrIjoiYTQ5MDc4NjAtYzI0ZS00YTRjLWE4NGEtODgxMzY4Yjc2ZGI2IiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=8261f97ece42040ada0a',
    featured: false
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.featured).slice(0, 3);
}
