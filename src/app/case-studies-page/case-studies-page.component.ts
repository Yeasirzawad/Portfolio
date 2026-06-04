import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';
import { CaseStudyCardComponent } from '../case-study-card/case-study-card.component';

@Component({
  selector: 'app-case-studies-page',
  standalone: true,
  imports: [CommonModule, RouterModule, CaseStudyCardComponent],
  templateUrl: './case-studies-page.component.html',
  styleUrl: './case-studies-page.component.css'
})
export class CaseStudiesPageComponent {
  caseStudies: CaseStudy[] = CASE_STUDIES;
}
