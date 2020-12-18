import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import {RecordListService} from '../../services/record-list.service'
@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {
  constructor(
    private recordListService: RecordListService
  ) { }
  defaultType = "-";
  defaultTags: string[] = [];
  defaultNote = "";
  defaultAmount ="";

  store(){
    this.recordListService.addToRecordList({
      note: this.defaultNote,
      tags: this.defaultTags,
      type: this.defaultType,
      amount: this.defaultAmount
    })
  }
  receiveType(type:string){
    this.defaultType = type;
  }

  receiveTags(tags: string[]){
    this.defaultTags = tags;
  }

  receiveNote(note: string){
    this.defaultNote = note;
  }

  receiveAmount(amount: string){
    this.defaultAmount = amount;
    console.log(this.defaultAmount);
    this.store();
    console.log(this.recordListService.recordList)
  }



  ngOnInit(): void {
  }

}
