import { Component, OnInit } from '@angular/core';
import { details } from '../details';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent implements OnInit {
  details = details;
  constructor() {}

  ngOnInit(): void {}
}
