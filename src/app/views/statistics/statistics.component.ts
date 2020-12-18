import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import {RecordListService} from '../../services/record-list.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css','../../components/commonStyle/reset.css']
})
export class StatisticsComponent implements OnInit {


  constructor(private recordListService: RecordListService) { }
  records = this.recordListService.recordList;
  ngOnInit(): void {
  }

}
