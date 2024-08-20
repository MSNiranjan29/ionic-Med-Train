import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.page.html',
  styleUrls: ['./create-an-account.page.scss'],
})
export class CreateAnAccountPage {
  createAnAccountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private http: HttpClient,
    private router: Router
  ) {
    this.createAnAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    }, { validator: CreateAnAccountPage.passwordMatchValidator });
  }

  static passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const rePassword = formGroup.get('rePassword')?.value;
    return password === rePassword ? null : { mismatch: true };
  }

  onCreateAccount() {
    if (this.createAnAccountForm.valid) {
      const { name, email, password } = this.createAnAccountForm.value;

      // Make POST request to backend
      this.http.post('http://localhost:5000/api/create-an-account', { 
        name, 
        email, 
        password, 
        rePassword: password // Ensure this field matches what the backend expects
      })
      .subscribe({
        next: (response) => {
          console.log('Account creation successful!', response);
          this.router.navigate(['/create-an-account1']); // Navigate to mobile number page
        },
        error: (error) => {
          console.error('Error creating account:', error);
          alert('Failed to create account. Please check the console for details.');
        }
      });
    } else {
      console.log('Form is invalid:', this.createAnAccountForm.errors);
      alert('Please fill out all fields correctly.');
    }
  }

  onBack() {
    this.navCtrl.back();
  }

  onGetStarted() {
    // Ensure the form is submitted before navigating
    if (this.createAnAccountForm.valid) {
      this.onCreateAccount(); // Submit the form
    } else {
      console.log('Form is invalid:', this.createAnAccountForm.errors);
      alert('Please fill out all fields correctly.');
    }
  }
}
