import { Component, OnInit } from '@angular/core';
import { details } from '../details';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent implements OnInit {
  details = details;

  constructor() {}

  ngOnInit(): void {}
}
