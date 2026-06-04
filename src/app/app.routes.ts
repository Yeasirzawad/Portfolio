import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaseStudiesPageComponent } from './case-studies-page/case-studies-page.component';
import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'case-studies',
    component: CaseStudiesPageComponent
  },
  {
    path: 'case-studies/:slug',
    component: CaseStudyDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
