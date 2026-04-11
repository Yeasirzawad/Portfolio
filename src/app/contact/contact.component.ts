import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  location = 'Kallyanpur, Dhaka';
  email = 'amirsifat@gmail.com';
  linkedin = 'https://linkedin.com/in/amirsifat';
}
