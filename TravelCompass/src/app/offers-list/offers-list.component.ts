import { Component, OnInit } from '@angular/core';

import { offers } from '../offers';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.sass']
})
export class OffersListComponent implements OnInit {
  offers = offers;
  constructor() { }

  ngOnInit(): void {
  }

}
