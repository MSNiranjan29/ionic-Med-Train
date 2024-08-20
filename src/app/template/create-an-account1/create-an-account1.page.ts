import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { CountryCodeModalPage } from '../country-code-modal/country-code-modal.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    private modalCtrl: ModalController,
    private router: Router,
    private http: HttpClient // Add HttpClient to constructor
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
      const email = localStorage.getItem('email'); // Retrieve email from local storage or other means

      if (!email) {
        console.error('Email is not available');
        return;
      }

      // Make POST request to backend
      this.http.post('http://localhost:5000/api/update-mobile-number', { email, mobNumber: `${countryCode} ${mobile}` })
        .subscribe({
          next: (response) => {
            console.log('Mobile number submitted successfully!', response);
            this.navigateToHome(); // Navigate to home on successful submission
          },
          error: (error) => {
            console.error('Error submitting mobile number:', error);
          }
        });
    } else {
      console.log("Form is not valid");
    }
  }

  onBack() {
    this.navCtrl.back();
  }

  async openCountryCodeModal() {
    document.querySelector('ion-content')?.classList.add('blur-background');
  
    const modal = await this.modalCtrl.create({
      component: CountryCodeModalPage,
      cssClass: 'country-code-modal',
      backdropDismiss: true,
    });
  
    modal.onDidDismiss().then((result) => {
      document.querySelector('ion-content')?.classList.remove('blur-background');
      
      if (result.data) {
        const selectedCountry = result.data;
        this.mobileForm.patchValue({ countryCode: selectedCountry.code });
      }
    });
  
    await modal.present();
  }

  navigateToHome() {
    this.router.navigate(['/contact']); // Adjust the route path as necessary
  }
}
