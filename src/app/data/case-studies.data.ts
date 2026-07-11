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
  approach: string;
  impact: BeforeAfter;
  tools: string[];
  link?: string;
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'Market Intelligence',
    slug: 'hmf-market-share-whitespace-analysis',
    title: 'HMF Express U.S. Market Share & Whitespace Analysis',
    subtitle: 'Market sizing, competitor mapping, and whitespace analysis',
    summary: 'Built a U.S.-wide market intelligence framework for HMF Express, a Senneca Holdings brand, consolidating nine Excel datasets into a single sales-ready view of market size, territory and customer share, competitor allocation, and whitespace opportunity across the hollow-metal doors and frames industry.',
    metrics: [
      { value: '$5.7B', label: 'Total U.S. Market Size', note: 'Hollow-metal doors and frames' },
      { value: '$36.1M', label: 'Territory-Level Whitespace', note: 'Across 8 key states' },
      { value: '$876.0M', label: 'Customer-Level Whitespace', note: 'Across 1,190 accounts' }
    ],
    challenge: 'Shipment data showed what HMF sold, but not total market size, territory position, or how much customer wallet remained uncaptured, leaving leadership without a basis for territory or account prioritization.\nNine disconnected Excel workbooks (territory sizing, shipments, customer spend, fair-share benchmarks, competitor allocation, pricing) had no unified structure to compare against, so patterns stayed buried in spreadsheets no one could act on.\nNo visibility into competitor allocation or manufacturer type across 1,190 customer accounts made it impossible to tell where HMF spend was genuinely at risk versus already secure.\nSales resources were deployed on instinct rather than evidence, with no way to distinguish attack markets, defend markets, and reactivation targets.',
    approach: 'Audited every sheet across the nine Excel datasets (territory sizing, shipments, customer spend, fair-share, competitor allocation, pricing) before writing any section, so every claim stayed tied to what the data actually supported.\nBuilt a unified fair-share model (Fair-Share Revenue minus Actual HMF Revenue) to benchmark territory performance against expected market participation for each state.\nModeled customer-level spend capacity across 1,190 accounts under low, base, and high scenarios, calculating customer whitespace as Estimated Spend minus HMF Revenue.\nUsed Python (pandas, NumPy) to calculate concentration ratios, rankings, and share gaps, then cross-referenced results against competitor allocation and manufacturer type (Project, Quick Ship & Custom, Specialty, Hybrid).\nApplied trend segmentation (growing, declining, stable, insufficient data) and classified every account into four action tiers (Grow, Retain, Reactivate, Monitor) so sales teams could act on the analysis directly.\nBenchmarked territory and regional pricing posture (national blended $472/unit) to flag premium, neutral, and discount markets.',
    impact: {
      before: [
        'Shipment data only, with no visibility into total market size, territory share, or customer wallet penetration',
        'No way to separate attack markets, defend markets, and reactivation targets; sales prioritization ran on instinct',
        'Competitor exposure and manufacturer-type risk unknown at the customer level across 1,190 accounts',
        'Nine disconnected Excel workbooks with no unified share, whitespace, or pricing view'
      ],
      after: [
        '$5.7B U.S. market sized, with $36.1M in territory whitespace ranked across an attack list led by Texas, California, and Arizona (88.2% of all positive whitespace)',
        '$876.0M in customer whitespace identified, revealing ~60% of existing HMF revenue comes from accounts under 5% wallet share',
        'Competitor spend mapped by customer and manufacturer type (ASSA ABLOY 22%, Allegion 17%, plus Project, Quick Ship, Specialty, and Hybrid segmentation)',
        '1,190 accounts converted into a 2025-2026 action pipeline: 461 Reactivate ($439.4M), 236 Grow ($289.3M), 453 Monitor, 40 Retain'
      ]
    },
    tools: ['Python', 'Pandas', 'NumPy', 'Excel', 'Market Sizing', 'Fair-Share Benchmarking', 'Competitive Intelligence', 'Whitespace Analysis'],
    featured: true
  },
  {
    tag: 'Market Entry Analysis',
    slug: 'airbnb-market-entry-study-bangladesh',
    title: 'Airbnb Bangladesh Market Entry Analysis',
    subtitle: 'Market entry analysis, competitive benchmarking, and positioning',
    summary: 'Ran a client-facing Airbnb market-entry study for Bangladesh, combining a Selenium-scraped dataset of 1,347 listings, 4,608 reviews, and 613 hosts with secondary market research to determine whether, where, and how an investor should enter the short-term rental market.',
    metrics: [
      { value: '1,347', label: 'Listings Analyzed', note: 'Across 8 Bangladesh divisions' },
      { value: '50-70%', label: 'Faster Market Validation', note: 'vs manual listing-by-listing research' },
      { value: '95.75%', label: 'Dhaka Host Response Rate', note: 'vs 62.62% in Chattogram' }
    ],
    challenge: 'A client considering Airbnb investment in Bangladesh had no data-backed view of which divisions offered real market potential, leaving the decision resting on manual browsing and anecdotal assumptions.\nPricing, competitive intensity, and guest amenity expectations varied by division with no structured way to compare them side by side.\nHost behavior and response quality, key signals of market maturity and competitiveness, were invisible without a listing-by-listing comparison.\nThere was no way to tell whether the market was mature enough to support a new entrant, or which division would give the strongest first foothold.',
    approach: 'Built a Selenium scraping pipeline collecting listing, host, review, pricing, rating, and amenity data across all 8 Bangladesh divisions, then consolidated it into a single analysis-ready dataset.\nBuilt a Power BI dashboard comparing divisions on listing volume, pricing, review activity, host response rate, and Superhost share, alongside a facilities and amenity breakdown.\nReframed the dashboard output from an investor\'s perspective, using scale, traction, host professionalism, and amenity completeness as proxies for market maturity and entry risk.\nLayered in secondary research (tourism and business travel demand, seasonality, rent benchmarks, setup and operating costs, and Bangladesh-specific Airbnb regulation) to convert descriptive data into a market-entry and positioning recommendation.',
    impact: {
      before: [
        'No data-backed view of which Bangladesh divisions offered real Airbnb market potential',
        'Pricing, competition, and amenity expectations varied by division with no side-by-side comparison',
        'Host response quality and Superhost share, key maturity signals, were invisible without manual, listing-by-listing review',
        'No way to tell whether the market could support a new entrant, or where to enter first'
      ],
      after: [
        '1,347 listings, 4,608 reviews, and 613 hosts consolidated into one structured decision-support study, cutting early-stage market validation time by an estimated 50-70% versus manual research',
        'Dhaka identified as the strongest entry market: 656 listings, a 95.75% host response rate, and 150 superhosts, the deepest and most professionally mature market in the dataset',
        'Chattogram identified as the strongest secondary market, priced 53% above Dhaka ($62.57 vs $40.88) but with weaker response quality (62.62%) and roughly half the listing depth',
        'Barisal flagged as a premium-looking but unproven niche: a $121 average nightly rate and 5.00 rating built on just 3 reviews and 52 listings, too thin for a high-confidence call',
        'Secondary research on rent, setup costs, seasonality, and regulation folded into the same study, strengthening investment evaluation beyond platform data alone'
      ]
    },
    tools: ['Python', 'Selenium', 'Pandas', 'NumPy', 'Power BI', 'Power Query', 'DAX', 'Market Research'],
    link: 'https://app.powerbi.com/view?r=eyJrIjoiZGZmMTA2YjUtZjk5YS00YjZjLWJmMmYtM2E1ZDQxZTI2MDAyIiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=d51523c1ba67c0c9cc96',
    featured: true
  },
  {
    tag: 'Business Intelligence',
    slug: 'customer-cohort-market-performance-dashboard',
    title: 'Customer Cohort & Market Performance Dashboard',
    subtitle: 'KPI tracking, cohort analysis, and multi-region consolidation',
    summary: 'Built a Power BI business intelligence solution for a multinational grocery chain operating across Canada, Mexico, and the US, consolidating four regional reports, KPI tracking, product and brand trends, and customer cohort analysis into one interactive dashboard.',
    metrics: [
      { value: '65%', label: 'Reduction in Prep Time', note: 'Per reporting cycle' },
      { value: '4', label: 'Reports Unified', note: 'Canada, Mexico, US regions' },
      { value: '5+', label: 'Hours Saved', note: 'Manual work eliminated per cycle' }
    ],
    challenge: 'Market and customer performance reporting was fragmented across four separate regional reports and manual spreadsheet processes, with no consistent way to track KPIs across Canada, Mexico, and the US.\nComparing sales and performance across markets meant manually reconciling spreadsheets each cycle, making trend spotting slow and error-prone.\nCustomer cohort behavior (retention, repeat-purchase patterns) had no structured analysis layer, so the business could see sales but not the customer dynamics driving them.\nRecurring reporting consumed 5+ hours of manual work per cycle, time that could have gone toward interpreting results instead of assembling them.',
    approach: 'Cleaned and transformed source data from four regional reports through Power Query, then built a single structured data model to replace the disconnected spreadsheets.\nBuilt KPI measures and visual summaries in DAX for sales and performance tracking, structured so Canada, Mexico, and the US could be compared side by side in one view.\nAdded a cohort analysis layer grouping customers by acquisition period to track retention and behavioral patterns over time, turning the dashboard into more than a sales KPI tracker.\nLayered in product and brand trend analysis so management could identify top performers and regional differences without leaving the dashboard.\nDesigned the model so recurring analysis could refresh automatically each cycle, balancing management-friendly summary views with deeper analytical drill-down.',
    impact: {
      before: [
        'Four separate regional reports and manual spreadsheet processes, with no consistent way to track KPIs across Canada, Mexico, and the US',
        '5+ hours of manual reconciliation work per reporting cycle, with sales, product, and regional comparisons done by hand',
        'No structured view of customer cohort behavior, retention, or repeat-purchase patterns behind the sales numbers',
        'Slow, error-prone trend spotting across brands, products, and regions'
      ],
      after: [
        'Four regional reports consolidated into one interactive Power BI model, cutting reporting preparation time by 65% per cycle',
        '5+ hours of manual spreadsheet work eliminated per reporting cycle through automated Power Query transformation and DAX measures',
        'Cohort analysis layer added on top of KPI tracking, surfacing customer retention and behavioral patterns the old reports never showed',
        'Top-performing brands, products, and customer segments identified in one view across all 3 regions, instead of stitched together from four separate reports'
      ]
    },
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Cohort Analysis', 'KPI Reporting', 'ETL'],
    featured: true
  },
  {
    tag: 'Market Research',
    slug: 'aggie-square-tenant-targeting-readiness',
    title: 'Aggie Square Tenant Targeting & Readiness Dashboard',
    subtitle: 'Commercialization mapping, multi-factor scoring, and prioritization',
    summary: 'Built a three-phase tenant targeting solution for Wexford Connect Labs, mapping UC Davis patents, labs, and infrastructure into a five-dimension scoring model that ranks life sciences companies into Engage Now, Emerging Fit, and Watchlist tiers for Aggie Square, then surfaced the framework in an interactive Power BI dashboard.',
    metrics: [
      { value: '2', label: 'Client-Facing Reports', note: 'Commercialization + scoring' },
      { value: '5', label: 'Scoring Dimensions', note: 'IP, infrastructure, growth, validation, relations' },
      { value: '50+', label: 'Companies Evaluated', note: 'With tiering and comparison' }
    ],
    challenge: 'Early target lists leaned on large, already-obvious pharmaceutical names, while mid-tier and emerging companies, often the stronger near-term fits for Aggie Square, went unsurfaced.\nNo consistent way to compare companies across IP alignment, infrastructure needs, growth signals, and relationship potential, so prioritization relied on individual judgment rather than a repeatable method.\nUC Davis commercialization assets (patents, translational labs, infrastructure) and candidate tenant companies lived in separate, disconnected research threads with no shared framework connecting them.\nNo scalable process existed for refreshing leads or re-scoring companies as new funding, PR, or clinical signals emerged.',
    approach: 'Built a baseline commercialization report mapping UC Davis patents, research domains (Cancer Biology, Neuroscience, Biomedical Engineering & Imaging, Regenerative Medicine, Microbiome & Gut-Brain Health), translational labs, and infrastructure.\nDesigned a weighted, five-pillar scoring model (IP Alignment, Infrastructure Fit, Growth & PR, Clinical Validation, Relational/Alumni Signals) built on domain-to-therapeutic crosswalks and infrastructure compatibility mapping.\nScored clinical validation using confirmed UC Davis trial and payment ties rather than general commercial activity, and assigned a non-zero baseline to companies without confirmed ties so sparse data did not unfairly penalize them.\nSegmented every company into three outreach tiers (Engage Now, Emerging Fit, Watchlist) and modeled the results in Power BI with DAX measures and helper tables for dynamic filtering by company, tier, domain, and infrastructure need.\nSeparated raw research, scoring logic, and presentation into distinct layers, reports for narrative explanation and the dashboard for exploration, so the same analytical backbone served both executive review and operational outreach.',
    impact: {
      before: [
        'Tenant lists skewed toward obvious large pharmaceutical names, with no structured way to surface mid-tier or emerging fits',
        'No consistent scoring across IP, infrastructure, growth, and relationship dimensions, so company comparisons stayed subjective',
        'UC Davis commercialization assets and candidate companies analyzed in separate silos with no shared framework',
        'No repeatable process for refreshing leads or re-scoring companies as new signals emerged'
      ],
      after: [
        'Two client-facing reports plus an interactive Power BI dashboard delivered on one shared scoring backbone',
        '50+ companies scored and compared across five weighted dimensions: IP alignment, infrastructure fit, growth and PR, clinical validation, and relational strength',
        'Every company tiered into Engage Now, Emerging Fit, or Watchlist, surfacing credible mid-tier and emerging companies alongside the obvious large players',
        'Infrastructure compatibility (GMP access, biorepository, imaging, flow cytometry) identified as a key differentiator for oncology, regenerative medicine, and diagnostics fits',
        'Scalable framework established for monthly lead refreshes and dashboard updates going forward'
      ]
    },
    tools: ['Power BI', 'DAX', 'Excel', 'Google Sheets', 'Power Query', 'Multi-Factor Scoring'],
    featured: false
  },
  {
    tag: 'Impact Evaluation',
    slug: 'post-covid-livelihood-recovery-endline',
    title: 'Post-COVID-19 Livelihood Recovery Endline Evaluation',
    subtitle: 'Mixed-method livelihood and resilience assessment, Ramu, Cox\'s Bazar',
    summary: 'Evaluated a post-COVID-19 livelihood recovery intervention for 330 households across two unions of Ramu, Cox\'s Bazar, combining household survey data with 8 FGDs, 19 KIIs, 5 IDIs, and 3 case studies to measure real baseline-to-endline change in income, agriculture, women\'s empowerment, financial inclusion, and disaster preparedness.',
    metrics: [
      { value: '59%', label: 'Income Increase', note: 'BDT 10,536 to BDT 16,828 mean household income' },
      { value: '98%', label: 'Tech Adoption', note: 'Agricultural technology from 32%' },
      { value: '330', label: 'Households Surveyed', note: 'Plus 35 FGDs, KIIs, IDIs & case studies' }
    ],
    challenge: 'Vulnerable households in Ramu, Cox\'s Bazar faced compounding shocks, COVID-19 income loss, the Rohingya influx, floods, cyclones, and landslides, with no evidence base to show whether recovery interventions were actually working.\nMean household income sat at just BDT 10,536, agricultural technology adoption at 32%, and rights and entitlement awareness at only 8%, leaving households exposed on income, production, and access to support simultaneously.\nRecovery planning existed mostly on paper: only 6% of households had implemented a Resilient Livelihood Restoration Plan, and just 11% of trained households had a business plan.\nThe evaluation needed to isolate real project impact across income, agriculture, women\'s participation, food security, financial inclusion, and disaster preparedness, and hold it to OECD-DAC-style evaluation criteria, not just report survey averages.',
    approach: 'Built an indicator-based household questionnaire linked to specific project outcomes (income, RLRP, agricultural adoption, off-farm business, food diversity, financial access, disaster preparedness, rights awareness), then fielded it across 330 households in two Ramu unions, Khuniapalong and Dakkhin Mithachhari.\nPaired the survey with 8 FGDs, 19 KIIs, 5 IDIs, and 3 case studies to explain the quantitative shifts with community and stakeholder context.\nCleaned and coded the dataset in SPSS, Excel, and Power Query, then compared baseline-to-endline values indicator by indicator rather than reporting single-point averages.\nBuilt Power BI visuals and indicator-level summaries for the final report, then interpreted every result against OECD-DAC-style evaluation dimensions, relevance, coherence, efficiency, effectiveness, impact, and sustainability, rather than presenting numbers in isolation.',
    impact: {
      before: [
        'Mean household income of just BDT 10,536, with limited off-farm income diversification',
        'Only 6% of households had implemented a Resilient Livelihood Restoration Plan, leaving recovery planning largely theoretical',
        'Agricultural technology adoption at 32%, with low resilience to climate and market shocks',
        'Just 11% of trained households had a business plan, and off-farm income activity was minimal',
        'Rights and entitlement awareness at only 8%, leaving households unable to access available support systems'
      ],
      after: [
        'Mean household income rose 59% to BDT 16,828, evidenced across 330 households',
        'RLRP implementation jumped from 6% to 85.5%, moving households from planning to action',
        'Agricultural technology adoption rose to 98%, with homestead gardening up from 31% to 94% (women\'s involvement 21.2% to 86.4%)',
        'Business plan development rose to 84%, and 62% of trained participants went on to start businesses',
        'Rights and entitlement awareness rose to 99%, alongside financial institution access improving from 45% to 63%'
      ]
    },
    tools: ['SPSS', 'Excel', 'Power Query', 'Power BI', 'DAX', 'KoBoToolbox', 'Mixed-Method Evaluation', 'Indicator Tracking'],
    featured: false
  },
  {
    tag: 'Intellectual Property Research',
    slug: 'decode-age-ip-validation-competitive-intelligence',
    title: 'Decode Age IP Validation, Competitive Intelligence & Commercial Readiness Analysis',
    subtitle: 'Patent landscape, replication risk, and revenue exposure assessment',
    summary: 'Built a strategic (not Freedom-to-Operate) IP validation and competitive intelligence framework for Decode Age\'s microbiome platform, combining a 162-family patent landscape, 21 competitor dossiers, and technical reproducibility review to map defensibility, replication risk, and revenue exposure across the platform\'s four core IP asset classes.',
    metrics: [
      { value: '162', label: 'Patent Families Analyzed', note: 'Consolidated from 174 patent documents' },
      { value: '21', label: 'Competitors Assessed', note: 'Scored against Decode Age\'s five capability layers' },
      { value: '~80%', label: 'Peak Revenue Exposure', note: 'Preventive/Longevity & IBS/IBD, aggressive scenario' }
    ],
    challenge: 'Decode Age had a strong technical narrative, but no clear answer on which parts of its microbiome platform were genuinely defensible versus easy for competitors to copy or bypass.\nNo structured view of where patent filing would protect value versus where it would waste capital, or whether the platform\'s reproducibility was strong enough for clinical trust and external deployment.\nData, biobanking, and reference database assets had unclear monetization potential, with no governance or licensing readiness assessment.\nNo prioritized view of which regions justified IP and commercial investment, which product lines were most exposed to revenue erosion, or what to act on now versus later.',
    approach: 'Scoped the work explicitly as strategic IP validation, not Freedom-to-Operate, using patent data as a proxy for novelty pressure, replication risk, and capital intensity rather than legal clearance.\nBuilt a Lens.org search and classification framework (CPC filters, short-token keywords, 16S/amplicon exclusions) to isolate Decode Age\'s real IP surface, then analyzed 174 patent documents in Python, consolidating them into 162 unique families and risk-labeling each High, Medium, or Low.\nClassified every family into four business-relevant asset buckets (Process & Reproducibility Systems, Algorithms & Computational Analysis, Biobanking & Viability Systems, Databases/Scores/Reference Frameworks) so the platform was assessed as a system rather than a component list.\nBuilt dossiers for 21 direct and adjacent competitors (Microba, Genova, Metabolon, Tiny Health, Macrogen, and others), scoring each against Decode Age\'s five capability layers and mapping replication pathways, bypass routes, and revenue impact.\nLayered in geographic capital efficiency (US, EU/UPC, UK, APAC, MEA), product-to-revenue conversion friction, and Go/Hold/Pivot decision triggers, then sequenced every recommendation across 12, 24, and 36-month windows.',
    impact: {
      before: [
        'No clarity on which parts of the microbiome platform were genuinely defensible versus easy for competitors to copy or bypass',
        'Patent, reproducibility, and data-monetization questions handled separately, with no shared framework connecting IP, science, and commercial strategy',
        'No prioritized view of which regions or product lines deserved IP and commercial investment',
        'Risk of the report becoming a generic patent list or competitor summary instead of a board-ready decision tool'
      ],
      after: [
        '174 patent documents consolidated into 162 unique families, risk-labeled and classified into four asset buckets, revealing Process & Reproducibility Systems as the highest-risk battleground (37 families, 8.1% High-risk share) and Algorithms as the most crowded (59 families, 88.1% Medium-risk)',
        '21 competitors scored against Decode Age\'s five capability layers, with Microba surfacing as the highest-overlap threat at a 10/10 match',
        'Revenue kill-zone mapping showed Preventive/Longevity and IBS/IBD facing up to ~80% peak exposure under aggressive competitive scenarios, versus slower but strategically important pressure on Oncology and B2B/Pharma',
        'Defensive counter-moves quantified with risk-reduction estimates (30-45% for productizing the reproducibility engine, 20-40% for scaling reference cohorts), then sequenced into a board-ready 12/24/36-month action roadmap across IP, technical, geographic, and commercial priorities'
      ]
    },
    tools: ['Python', 'Lens.org', 'Excel', 'Google Sheets', 'Patent Landscape Analysis', 'Competitive Intelligence', 'CPC Classification', 'Revenue Risk Mapping'],
    featured: false
  },
  {
    tag: 'Market Intelligence',
    slug: 'us-data-careers-job-market-analysis',
    title: 'U.S. Data Job Market Analysis',
    subtitle: 'Large-scale labor-market scraping and compensation benchmarking',
    summary: 'Scraped and analyzed 11,290 Indeed job postings and 4,989 company records across 5 data-role groups (Data Analyst, Business Analyst, Data Scientist, Data Engineer, Machine Learning Engineer) to build a Power BI dashboard benchmarking hiring demand, salary trends, required skills, and employer characteristics across 131 industries.',
    metrics: [
      { value: '11,290', label: 'Job Postings Analyzed', note: 'Across 5 role groups, 131 industries' },
      { value: '$165K', label: 'Highest Average Salary', note: 'Machine Learning Engineer, the top-paid role' },
      { value: '60-80%', label: 'Faster Market Research', note: 'vs manual job board browsing' }
    ],
    challenge: 'Job market data for data-driven careers was scattered across thousands of postings and company pages, with no structured way to see which roles were most in demand.\nSalary ranges, required skills, and hiring intensity varied by role and level with no consolidated way to compare them.\nCompany-level context (industry, size, revenue, workplace ratings) lived separately from job postings, so demand signals and employer quality could not be viewed together.\nWithout structuring the data, students, job seekers, and analysts had no scalable way to read the market beyond individual listings.',
    approach: 'Built a Selenium scraping pipeline collecting 11,290 job posting links across 5 role groups (Data Analyst, Business Analyst, Data Scientist, Data Engineer, Machine Learning Engineer), then followed linked employer pages to scrape 4,989 company records.\nCleaned and transformed the combined dataset in pandas, handling missing values, removing duplicates, and standardizing role, salary, and location fields.\nParsed job descriptions to extract skill indicators (Python, SQL, Tableau, Power BI, AWS, TensorFlow, Kafka, Java, Excel, and more) as structured flags rather than free text.\nBuilt a multi-page Power BI dashboard (summary, job information, company and skills, company overview) joining job-level demand with company-level context like revenue band, CEO approval, and employee ratings.',
    impact: {
      before: [
        'Job-market data for data careers scattered across thousands of postings and company pages, with no structured view of demand',
        'Salary ranges, required skills, and hiring intensity impossible to compare across roles, levels, and industries',
        'Company context (industry, revenue, workplace ratings) disconnected from job-level demand signals',
        'No scalable way for job seekers or analysts to read the market beyond individual listings'
      ],
      after: [
        '11,290 job postings and 4,989 company records across 131 industries consolidated into one interactive dashboard, cutting manual labor-market research time by an estimated 60-80%',
        'Machine Learning Engineer identified as the highest-paid role at a $165K average salary, with Python, SQL, Power BI, and Tableau as the most consistently demanded skills across all 5 role groups',
        'Specialized skills (Scala, TensorFlow, Kafka) isolated as differentiators specific to Data Engineer and Data Scientist roles',
        'Company landscape benchmarked alongside job data: 22.18% of employers in the $1B-$5B revenue band, 45.5% average CEO approval, and a 3.7/5 average workplace rating'
      ]
    },
    tools: ['Python', 'Selenium', 'Pandas', 'NumPy', 'Power BI', 'Power Query', 'DAX', 'Skill Extraction'],
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
