import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from "./education/education.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { CertificationsComponent } from "./certifications/certifications.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { CaseStudyComponent } from "./case-study/case-study.component";
import { CaseStudiesHomepageComponent } from './case-studies-homepage/case-studies-homepage.component';
import { CaseStudiesPageComponent } from './case-studies-page/case-studies-page.component';
import { CaseStudyDetailComponent } from './case-study-detail/case-study-detail.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificationsComponent,
    ProjectsComponent,
    ContactComponent,
    CaseStudyComponent,
    CaseStudiesHomepageComponent,
    CaseStudiesPageComponent,
    CaseStudyDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

