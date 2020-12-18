import { Injectable } from '@angular/core';
interface recordType{
  note:string|null,
  tags:string[]|null,
  type:"+"|"-",
  amount:string
}

@Injectable({
  providedIn: 'root'
})
export class RecordListService {
  recordList: recordType[]=[]
  note: string="";
  tags: string[]=[];
  type: string = "";
  amount: string ="";
  addNote(note: string){
    this.note = note;
    console.log(this.note);
    
  }

  addTags(tags: string[]){
    this.tags = tags;
    console.log(this.tags);
    
  }

  addType(type: string){
    this.type = type;
    console.log(this.type);
    
  }

  addAmount(amount: string){
    this.amount = amount;
    console.log(this.amount);
    
  }

  addToRecordList(record: recordType){
    this.recordList.push(record);
  }
  constructor() { }
}
