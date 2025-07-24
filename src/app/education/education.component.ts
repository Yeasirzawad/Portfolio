import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  sectionTitle = 'Education';

  educationList = [
    {
      degree: 'M.Sc. in Applied Statistics and Data Science',
      school: 'Jahangirnagar University',
      duration: '2024 - 2025 (Expected)',
      gpa: null
    },
    {
      degree: 'B.Sc. in Statistics',
      school: 'Shahjalal University Science and Technology',
      duration: '2019 - 2023',
      gpa: 'CGPA: 3.46 / 4.00'
    },
    {
      degree: 'Higher Secondary School Certificate',
      school: 'BAF Shaheen College',
      duration: '2016 - 2018',
      gpa: 'GPA: 5.00 / 5.00'
    },
    {
      degree: 'Secondary School Certificate',
      school: 'BAF Shaheen College',
      duration: '2014 - 2016',
      gpa: 'GPA: 5.00 / 5.00'
    }
  ];
}
