import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'R', 'SQL']
    },
    {
      category: 'Technologies',
      skills: [
        'MS Word', 'MS Excel', 'Power Query', 'MS Power BI',
        'DAX', 'SPSS', 'STATA', 'Jupyter Notebook'
      ]
    },
    {
      category: 'Visualization',
      skills: ['MS Power BI', 'Excel Charts', 'Matplotlib', 'Seaborn']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'Analysis',
      skills: [
        'Descriptive Analysis', 'Quantitative Analysis', 'Statistical Analysis',
        'Predictive Modelling', 'Regression Analysis', 'Time Series Analysis'
      ]
    }
  ];
}
