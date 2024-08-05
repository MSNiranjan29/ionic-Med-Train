import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search_result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  recentSearches: string[] = [
    'Search 1',
    'Search 2',
    'Search 3',
  ];

  constructor() { }

  ngOnInit() {
  }

}
