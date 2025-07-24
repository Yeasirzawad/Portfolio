import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Job Market Analysis in Data-Driven Career in USA',
      description: `Leveraged Selenium for web scraping to collect over 11,000 job postings and nearly 5,000 company profiles from Indeed.com, followed by data cleaning and analysis using pandas to extract key skills and insights for data-driven roles.
Developed an interactive Power BI dashboard to visualize job market trends, highlighting in-demand roles, essential skills, salary ranges, and company profiles across the USA.`,
      technologies: ['Selenium', 'Pandas', 'Numpy', 'Power Query', 'Power BI', 'DAX'],
      imageUrl: 'assets/project-image/job-market-analysis.png',
      link: '#',
      githubLink: 'https://github.com/yourusername/job-market-analysis'
    },
    {
      title: 'Analysis of Airbnb in Bangladesh',
      description: `Developed web scraping pipeline with Selenium to gather Airbnb listings, host information, and user reviews in Bangladesh.
Built an interactive Power BI dashboard to analyze listings, pricing, hosts, and amenities, providing insights for market segmentation and pricing strategies.
Implemented a sentiment analysis model based on user reviews to predict satisfaction levels.`,
      technologies: ['Selenium', 'Pandas', 'Numpy', 'Power Query', 'Power BI', 'DAX'],
      imageUrl: 'assets/project-image/airbnb-analysis.png',
      link: '#',
      githubLink: 'https://github.com/yourusername/airbnb-analysis'
    },
    {
      title: 'Market Performance and Customer Cohort Analysis',
      description: `Developed a business intelligence solution for a multi-national grocery chain operating across Canada, Mexico, and the United States.
Tracked KPIs, analyzed product trends, identifying best-selling brands, customer behavior, comparing regional performance using MS Power BI.`,
      technologies: ['Power BI', 'Power Query', 'Data Modelling', 'Cohort Analysis', 'ETL'],
      imageUrl: 'assets/project-image/market-performance.png',
      link: '#',
      githubLink: 'https://github.com/yourusername/market-performance'
    },
    {
      title: 'Exploring the Involvement in Freelancing (tuition) Activities of Students in SUST',
      description: `Conducted a comprehensive study of 400 students across 17 departments in SUST using PPS and SRS sampling techniques.
Performed data analysis including descriptive statistics, chi-square tests, and binary logistic regression modeling.
Identified key factors influencing students’ involvement in freelancing and tuition activities, providing insights into their background characteristics and associations between various factors.`,
      technologies: ['Google Sheets', 'RStudio', 'SPSS', 'Logistic Regression', 'Report Writing'],
      imageUrl: 'assets/images/freelancing-sust.jpg',
      link: '#',
      githubLink: 'https://github.com/yourusername/freelancing-sust'
    }
  ];
}
