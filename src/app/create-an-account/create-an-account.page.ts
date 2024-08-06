import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.page.html',
  styleUrls: ['./create-an-account.page.scss'],
})
export class CreateAnAccountPage {
  createAnAccountForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.createAnAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    });
  }

  onCreateAccount() {
    if (this.createAnAccountForm.valid) {
      // Handle create account logic here
      console.log('Account creation successful!');
    }
  }

  onBack() {
    // Implement the action for the back button
    this.navCtrl.back();
  }
  onGetStarted() {
    // Handle forgot password logic here
    this.navCtrl.navigateForward('/search-result');
  }
}
