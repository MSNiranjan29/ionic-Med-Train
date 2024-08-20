import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private http: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onNext() {
    if (this.contactForm.valid) {
      const { username, password } = this.contactForm.value;
  
      // Make a POST request to the backend API
      this.http.post('http://localhost:5000/api/login', { email: username, password })
        .subscribe({
          next: (response: any) => {
            console.log('Login successful!', response);
            // Store the JWT and user details
            localStorage.setItem('token', response.token); // Store JWT
            localStorage.setItem('user', JSON.stringify(response.user)); // Store user details
            this.navCtrl.navigateForward('/dashboard/home');
          },
          error: (error) => {
            console.error('Login failed:', error);
            alert(error.error.message || 'Login failed. Please try again.');
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword() {
    this.navCtrl.navigateForward('/forgot');
  }

  onBack() {
    this.navCtrl.navigateForward('/welcome');
  }
}
