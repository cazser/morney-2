import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'money-type',
  templateUrl: './money-type.component.html',
  styleUrls: ['./money-type.component.css','../commonStyle/reset.css']
})
export class MoneyTypeComponent implements OnInit {
  selected="-"
  constructor() { }

  ngOnInit(): void {
  }
  onClick(target: "+" | "-"){
    this.selected = target
  }
}
