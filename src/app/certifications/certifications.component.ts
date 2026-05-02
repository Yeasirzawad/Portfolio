import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  event: string;
  date: string;
  logoText: string;
  logoClass: string;
  credentialUrl: string;
  logoUrl?: string;
}

@Component({
  selector: 'certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      event: 'Microsoft',
      date: 'June 2025',
      logoText: 'MS',
      logoClass: 'microsoft',
      credentialUrl: '#'
    },
    {
      title: 'Time Series Analysis with Python',
      event: '365 Data Science',
      date: 'November 2024',
      logoText: '365',
      logoClass: 'data-science',
      credentialUrl: 'https://learn.365datascience.com/certificates/CC-FDAB86234E/'
    },
    {
      title: 'Power BI Specialist',
      event: 'Maven Analytics',
      date: 'October 2024',
      logoText: 'MA',
      logoClass: 'maven',
      credentialUrl: 'https://certificates.mavenanalytics.io/743a0d37-a118-4984-ac17-d3c92da55aae#acc.kbi3loqJ'
    },
    {
      title: 'Associate Data Analyst in SQL',
      event: 'DataCamp',
      date: 'May 2024',
      logoText: 'DC',
      logoClass: 'datacamp',
      credentialUrl: 'https://www.datacamp.com/statement-of-accomplishment/track/743516b75740baab86c9583d998c95bea807ef0b?raw=1'
    },
    {
      title: 'An Assessment on Online Learning During COVID-19 Pandemic Among Secondary Level Delegates in Bangladesh',
      event: 'International Seminar and Stat Fest, SUST',
      date: 'March 2023',
      logoText: 'SUST',
      logoClass: 'sust',
      logoUrl: 'assets/logos/sust.png',
      credentialUrl: 'https://drive.google.com/file/d/1t4lamfYaeZmhg9UCg8cmuCTSq_HOcKSL/view'
    },
    {
      title: 'A Comparison between ARCH and GARCH Models: Evidence from the Onion Price Volatility in Bangladesh over the Past Decades',
      event: 'International Seminar and Stat Fest, SUST',
      date: 'March 2023',
      logoText: 'SUST',
      logoClass: 'sust',
      logoUrl: 'assets/logos/sust.png',
      credentialUrl: 'https://drive.google.com/file/d/1fPmVjKCcti2_R7YcN0MAXTUaSLrgllHw/view'
    }
  ];
}
