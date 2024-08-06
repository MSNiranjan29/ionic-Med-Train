import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {
  forgotForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onForgotPassword() {
    if (this.forgotForm.valid) {
      // Handle forgot password logic here
      console.log('Forgot password request submitted!');
    }
  }
  onSend()  {
    // Handle forgot password logic here
    this.navCtrl.navigateForward('/search-details');
  }

  onBack() {
    // Implement the action for the back button
    this.navCtrl.back();
  }
}
