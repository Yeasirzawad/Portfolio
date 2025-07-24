import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Poster presentation on An Assessment On Online Learning During COVID-19 Pandemic Among Secondary Level Delegates In Bangladesh',
      event: 'International Seminar and Stat Fest, SUST',
      date: '11–12 March 2023',
      credentialUrl: '#'
    },
    {
      title: 'Poster presentation on A Comparison between ARCH and GARCH Models: Evidence From The Onion Price Volatility in Bangladesh Over The Past Decades',
      event: 'International Seminar and Stat Fest, SUST',
      date: '11–12 March 2023',
      credentialUrl: '#'
    },
    {
      title: 'Associate Data Analyst in SQL',
      event: 'Datacamp',
      date: 'May 2024',
      credentialUrl: '#'
    },
    {
      title: 'Power BI Specialist',
      event: 'Maven Analytics',
      date: 'October 2024',
      credentialUrl: '#'
    }
  ];
}
