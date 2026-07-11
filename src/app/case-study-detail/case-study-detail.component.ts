import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { getCaseStudyBySlug, CaseStudy, BeforeAfter } from '../data/case-studies.data';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './case-study-detail.component.html',
  styleUrl: './case-study-detail.component.css'
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudy: CaseStudy | undefined;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.caseStudy = getCaseStudyBySlug(slug);
      
      if (!this.caseStudy) {
        this.notFound = true;
      }
    });
  }

  /**
   * Check if text contains bullet points (starts with • or -)
   */
  isBulletFormat(text: string): boolean {
    if (!text) return false;
    const lines = text.split('\n').filter(line => line.trim());
    return lines.some(line => line.trim().startsWith('•') || line.trim().startsWith('-'));
  }

  /**
   * Parse bullet-separated text into an array
   */
  parseBulletList(text: string): string[] {
    if (!text) return [];

    // Split by newline and filter
    const lines = text.split('\n').filter(line => line.trim());

    return lines.map(line => {
      // Remove leading bullet points or dashes
      return line.trim().replace(/^[•\-\*]\s*/, '');
    });
  }

  /**
   * Pair up before/after items by index so mismatched-length lists
   * still render as aligned rows in the Impact grid.
   */
  impactRows(impact: BeforeAfter): { before: string; after: string }[] {
    const rowCount = Math.max(impact.before.length, impact.after.length);
    const rows: { before: string; after: string }[] = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push({ before: impact.before[i] || '', after: impact.after[i] || '' });
    }
    return rows;
  }
}

