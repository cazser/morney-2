import { Injectable } from '@angular/core';
interface recordType{
  note:string|null,
  tags:string[]|null,
  type:string|null,
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
  key = "recordList";

  addToRecordList(record: recordType){
    this.recordList.push(record);
  }
  constructor() {
    this.recordList=JSON.parse(localStorage.getItem(this.key) as string)||[];
  }

  saveToLocal(){
    localStorage.setItem(this.key, JSON.stringify(this.recordList));
    window.alert("here")
  }
}
