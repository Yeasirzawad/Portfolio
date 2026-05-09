import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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
  isSubmitting = false;
  submitError = '';

  async onSubmit(contactForm: NgForm) {
    if (contactForm.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Message could not be sent.');
      }

      this.submitted = true;
      this.formData = { name: '', email: '', phone: '', message: '' };
      contactForm.resetForm(this.formData);

      setTimeout(() => {
        this.submitted = false;
      }, 4000);
    } catch {
      this.submitError = 'Something went wrong. Please email me directly at amirsifat@gmail.com.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
