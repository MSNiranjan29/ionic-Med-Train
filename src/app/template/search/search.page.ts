import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  searchQuery: string = '';
  recentSearches: string[] = [];

  constructor(private navCtrl: NavController) {}

  performSearch(event: any) {
    const query = event.detail.value;
    if (query.trim() !== '' && !this.recentSearches.includes(query.trim())) {
      this.recentSearches.push(query.trim());
    }
    // Perform search logic here
  }

  navigateToSearch(search: string) {
    // Navigate to the search results or perform an action with the selected search
  }

  goBack() {
    this.navCtrl.back();
  }
}
