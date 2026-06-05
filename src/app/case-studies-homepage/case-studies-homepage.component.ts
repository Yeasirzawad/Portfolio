import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { getFeaturedCaseStudies, CaseStudy } from '../data/case-studies.data';
import { CaseStudyCardComponent } from '../case-study-card/case-study-card.component';

@Component({
  selector: 'app-case-studies-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, CaseStudyCardComponent],
  templateUrl: './case-studies-homepage.component.html',
  styleUrl: './case-studies-homepage.component.css'
})
export class CaseStudiesHomepageComponent {
  featuredCaseStudies: CaseStudy[] = getFeaturedCaseStudies();
}
