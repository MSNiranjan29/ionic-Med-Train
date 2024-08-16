import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../country-code-modal/country-code-modal.page';

@Component({
  selector: 'app-create-an-account1',
  templateUrl: './create-an-account1.page.html',
  styleUrls: ['./create-an-account1.page.scss'],
})
export class CreateAnAccount1Page implements OnInit {
  mobileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

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
    this.navCtrl.back();
  }
  async openCountryCodeModal() {
    // Add blur before presenting the modal
    document.querySelector('ion-content')?.classList.add('blur-background');
  
    const modal = await this.modalCtrl.create({
      component: CountryCodeModalPage,
      cssClass: 'country-code-modal',
      backdropDismiss: true,
    });
  
    // Handle the result when the modal is dismissed
    modal.onDidDismiss().then((result) => {
      // Remove blur when the modal is dismissed
      document.querySelector('ion-content')?.classList.remove('blur-background');
      
      // Check if a country was selected
      if (result.data) {
        const selectedCountry = result.data;
        this.mobileForm.patchValue({ countryCode: selectedCountry.code });
      }
    });
  
    // Present the modal
    await modal.present();
  }
  
}
