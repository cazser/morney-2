import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css',
  '../commonStyle/NavWrapper.css']
})
export class LabelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
