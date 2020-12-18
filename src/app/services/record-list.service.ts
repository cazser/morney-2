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

  addToRecordList(record: recordType){
    this.recordList.push(record);
  }
  constructor() {
    this.recordList=[];
   }
}
