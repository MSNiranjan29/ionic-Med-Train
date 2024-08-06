import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
[x: string]: any;
  searchQuery: string = '';
  recentSearches = [
    {
      image: 'assets/images/antibiotic.jpg',
      title: 'Antibiotic Prescribing Made Easy',
      description: 'By ID Chapter | Micro Lab',
      views: '1.0K',
      comments: '0',
      rating: '4.5 (452 votes)'
    },
    {
      image: 'assets/images/anaphylaxis.jpg',
      title: 'Guide to anaphylaxis preparedness (gap)',
      description: 'MedTrain',
      views: '800',
      comments: '0',
      rating: ''
    },
    {
      image: 'assets/images/asthma.jpg',
      title: 'Allergy Asthma Monthly CME',
      description: 'MedTrain',
      views: '700',
      comments: '0',
      rating: ''
    }
  ];
item: any;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    
  }

  goBack() {
    this.navCtrl.back();
  }
}
