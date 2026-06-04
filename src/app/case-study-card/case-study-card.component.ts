import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaseStudy } from '../data/case-studies.data';

@Component({
  selector: 'app-case-study-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './case-study-card.component.html',
  styleUrl: './case-study-card.component.css'
})
export class CaseStudyCardComponent {
  @Input() caseStudy!: CaseStudy;
}
