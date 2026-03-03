import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-Basic');

  registrationForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]), // New Field
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]), // New Field (10 digits)
    role: new FormControl('customer', [Validators.required]), // New Field (Dropdown)
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Final Registration Data:', this.registrationForm.value);
      alert('Registration successful!');
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}