import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'money-tags',
  templateUrl: './money-tags.component.html',
  styleUrls: ['./money-tags.component.css','../commonStyle/reset.css', '../commonStyle/selected.css']
})
export class MoneyTagsComponent implements OnInit {
  selectedTags=new Set();
  tags=['衣','食','住','行']
  constructor() { }
  tagOnClick(event:any){
    console.log(event.target.textContent)
    const target = event.target
    target.classList.add("selected");
  }
  ngOnInit(): void {
  }

}
