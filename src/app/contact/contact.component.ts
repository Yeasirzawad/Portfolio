import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  location = 'Kallyanpur, Dhaka';
  phone = '01317974269';
  email = 'amirsifat@gmail.com';
  linkedin = 'https://linkedin.com/in/yeasir-zawad';

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    const subject = encodeURIComponent(`Portfolio Contact from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\n\nMessage:\n${this.formData.message}`
    );
    window.location.href = `mailto:amirsifat@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
    setTimeout(() => { this.submitted = false; }, 4000);
    this.formData = { name: '', email: '', phone: '', message: '' };
  }
}
