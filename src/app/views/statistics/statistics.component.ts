import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import {RecordListService} from '../../services/record-list.service'
interface recordType{
  note:string|null,
  tags:string[]|null,
  type:string|null,
  amount:string
  date:Date
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css','../../components/commonStyle/reset.css']
})
export class StatisticsComponent implements OnInit {

  selectedType = "-"
  records: recordType[]=[]
  constructor(private recordListService: RecordListService) { 
    this.selectedType="-";
    this.records = this.recordListService.recordList.filter((item)=>
      item.type === this.selectedType
    );
  }
  ngOnInit(): void {
  }

  onClick(target: "+" | "-"){
    this.selectedType = target
    this.records = this.recordListService.recordList.filter((item)=>
      item.type===this.selectedType
    )

//    console.log(this.records)

  }

}
