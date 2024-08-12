import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Country } from './country.model';

@Component({
  selector: 'app-country-code-modal',
  templateUrl: './country-code-modal.page.html',
  styleUrls: ['./country-code-modal.page.scss'],
})
export class CountryCodeModalPage {
  searchTerm: string = '';
  recentSearches: string[] = []; // Add this line to define recentSearches
  countries: Country[] = [
    { name: 'Afghanistan', code: '+93', flag: 'assets/flags/af.png' },
    { name: 'Albania', code: '+355', flag: 'assets/flags/al.png' },
    { name: 'Algeria', code: '+213', flag: 'assets/flags/dz.png' },
    { name: 'Andorra', code: '+376', flag: 'assets/flags/ad.png' },
    { name: 'Angola', code: '+244', flag: 'assets/flags/ao.png' },
    // Add other countries similarly
  ];
  filteredCountries: Country[] = [];

  constructor(private modalCtrl: ModalController) {
    this.filteredCountries = this.countries;
  }

  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.countries.filter(country => {
      return country.name.toLowerCase().includes(searchTerm) || country.code.includes(searchTerm);
    });
  }

  selectCountryCode(country: Country) {
    this.modalCtrl.dismiss(country);
  }

  navigateToSearch(search: string) {
    // Implement navigation to search
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
