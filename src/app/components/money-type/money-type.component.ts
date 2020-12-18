import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'money-type',
  templateUrl: './money-type.component.html',
  styleUrls: ['./money-type.component.css','../commonStyle/reset.css']
})
export class MoneyTypeComponent implements OnInit {
  selectedType="-"
  @Output() private outer=new EventEmitter<string>();

  constructor() { }

  sendParent(){
    // alert('zhixing');
    this.outer.emit(this.selectedType)
  }

  ngOnInit(): void {
  }
  onClick(target: "+" | "-"){
    this.selectedType = target
    this.sendParent();
  }
}
