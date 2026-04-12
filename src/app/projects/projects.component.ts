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
      title: 'US Data Careers Job Market Analysis',
      description: 'Scraped and analyzed 11,290 job postings and 4,989 company records from Indeed to uncover hiring trends, salary patterns, and the most in-demand skills across data-driven roles in the U.S. Built an interactive Power BI dashboard that turned large-scale job and company data into actionable insights for market demand, role comparison, and career-focused decision-making.',
      technologies: ['Python', 'Selenium', 'Pandas', 'NumPy', 'Power Query', 'Power BI', 'DAX'],
      imageUrl: 'assets/project-image/Job_market_Analysis_Project.png',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYTQ5MDc4NjAtYzI0ZS00YTRjLWE4NGEtODgxMzY4Yjc2ZGI2IiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=8261f97ece42040ada0a&fbclid=IwZXh0bgNhZW0CMTEAAR15CYGczhBypvaadaHKGVFyOjUbe_WgPAWGWk3Q81zstFIE7EAazZUQ4O8_aem_QDHVIHBEAiA7BCugdAbn6g',
      githubLink: 'https://github.com/Yeasirzawad/Indeed-Job-Scrapping-USA'
    },
    {
      title: 'Airbnb Market Entry Analysis in Bangladesh',
      description: `Built a client-facing Airbnb market study by scraping listing, host, review, and amenity data across Bangladesh. Analyzed 1,347 listings, 4,608 reviews, and 613 hosts in Power BI to evaluate pricing, competition, and market positioning, with Dhaka emerging as the strongest entry market.`,
      technologies: ['Python', 'Selenium', 'Pandas', 'NumPy', 'Power Query', 'Power BI', 'DAX'],
      imageUrl: 'assets/project-image/AirBnB_Project.png',
      link: 'https://app.powerbi.com/view?r=eyJrIjoiZGZmMTA2YjUtZjk5YS00YjZjLWJmMmYtM2E1ZDQxZTI2MDAyIiwidCI6IjZmNDczODVjLTY3YjQtNGMwNi1hN2M0LWVmNmZhNTI4YTk1ZSIsImMiOjEwfQ%3D%3D&pageName=d51523c1ba67c0c9cc96',
      githubLink: 'https://github.com/Yeasirzawad/Airbnb-Bangladesh-Scrap'
    },
    {
      title: 'Customer Cohort and Market Performance Analysis',
      description: 'Built a Power BI business intelligence dashboard for a multinational grocery chain operating across Canada, Mexico, and the United States. Consolidated 4 separate reports into 1 interactive reporting view, reduced reporting preparation time by 65%, cut manual spreadsheet work by 5 hours per cycle, and improved KPI, brand, and customer cohort analysis across 3 regions.',
      technologies: ['Power BI', 'Power Query', 'Data Modeling', 'DAX', 'Cohort Analysis', 'ETL'],
      imageUrl: 'assets/project-image/market-performance.png',
      link: '#',
      githubLink: 'https://github.com/yourusername/market-performance'
    },
    {
      title: 'Student Freelancing and Tuition Activity Analysis at SUST',
      description: 'Analyzed survey data from 400 students across 17 departments at SUST to identify the key factors influencing participation in freelancing and private tuition. Built a binary logistic regression model with 96.8% classification accuracy and 0.98 AUC, showing that tuition was the dominant income activity (220 students, 55%) and that time spent on income-generating work was the strongest predictor of participation.',
      technologies: ['Google Forms', 'RStudio', 'SPSS', 'Binary Logistic Regression', 'Chi-Square Test', 'Report Writing'],
      imageUrl: 'assets/project-image/Freelancing Project.png',
      link: "https://drive.google.com/file/d/1e5jMPFiJO0RwHUB_c7R2uwHU0Vol0BX2/view?usp=drive_link",
      githubLink: 'https://github.com/Yeasirzawad/Involvement-in-Freelancing--tuition--Activities-in-SUST'
    },
    {
        title: 'Regional Revenue Dashboard for Toy Store Business',
        description: 'Built a dynamic Excel dashboard to monitor regional revenue, compare store performance, and track month-over-month product movement for a toy retail business. Structured the workbook with a dedicated Data Prep layer using time-based KPI logic, ranking formulas, and dynamic region selection to create a scalable and user-friendly reporting model.',
        technologies: ['Microsoft Excel', 'Data Modeling', 'Dashboard Design', 'SUMIFS', 'INDEX-MATCH', 'YoY / MoM Analysis'],
        imageUrl: 'assets/project-image/Toy_Store.png',
        link: 'https://github.com/Yeasirzawad/Toy-Store-Monthly-Sales-Analysis/tree/main',
        githubLink: 'https://github.com/Yeasirzawad/Toy-Store-Monthly-Sales-Analysis/tree/main'
      }
  ];
}