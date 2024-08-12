import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../country-code-modal/country-code-modal.page';  // Adjust the path if necessary

@Component({
  selector: 'app-create-an-account1',
  templateUrl: './create-an-account1.page.html',
  styleUrls: ['./create-an-account1.page.scss'],
})
export class CreateAnAccount1Page implements OnInit {
  mobileForm!: FormGroup; // Use definite assignment assertion if needed

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private modalCtrl: ModalController // Add ModalController to the constructor
  ) { }

  ngOnInit() {
    this.mobileForm = this.formBuilder.group({
      countryCode: ['+91', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSend() {
    if (this.mobileForm.valid) {
      const { countryCode, mobile } = this.mobileForm.value;
      console.log(`Mobile Number Submitted: ${countryCode} ${mobile}`);
    } else {
      console.log("Form is not valid");
    }
  }

  onBack() {
    // Implement the action for the back button
    this.navCtrl.back();
  }

  async openCountryCodeModal() {
    const modal = await this.modalCtrl.create({
      component: CountryCodeModalPage,
      cssClass: 'country-code-modal'
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.mobileForm.patchValue({ countryCode: data.data.code });
      }
    });

    return await modal.present();
  }
}
