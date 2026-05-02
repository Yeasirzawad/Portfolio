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
      duration: '2024 - 2026 (Expected)',
      gpa: 'CGPA: 3.80 / 4.00'
    },
    {
      degree: 'B.Sc. in Statistics',
      school: 'Shahjalal University Science and Technology',
      duration: '2019 - 2023',
      gpa: 'CGPA: 3.46 / 4.00'
    }
  ];
}
