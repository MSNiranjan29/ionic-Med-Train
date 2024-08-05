import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.contactForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.contactForm.valid) {
      // Handle login logic here
      console.log('Login successful!');
    }
  }

  onForgotPassword() {
    // Handle forgot password logic here
    this.navCtrl.navigateForward('/forgot');
  }

  onBack() {
    // Implement the action for the back button
    this.navCtrl.back();
  }

  onNext() {
    // Navigate to the create-an-account page
    this.navCtrl.navigateForward('/create-an-account');
  }
}
