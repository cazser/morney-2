import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'money-numberpad',
  templateUrl: './money-numberpad.component.html',
  styleUrls: ['./money-numberpad.component.css','../commonStyle/reset.css']
})
export class MoneyNumberpadComponent implements OnInit {
  amount=""
  constructor() { }
  buttonOnClick(event: MouseEvent){
    if(event.target){
      const target = event.target as Element;
      const buttonType = target.textContent;
      if(buttonType==='删除'){
          if(this.amount){
            this.amount=this.amount.substring(0, this.amount.length - 1);  

          }
      }else if(buttonType === '清空'){
        this.amount="";
      }else if(buttonType==="√"){

      }else{
        if(buttonType==="."){
          if(this.amount.indexOf('.')>=0 ||
              this.amount===''){
            return;
          }
        }
        if(buttonType==="0"){
          if(this.amount==='0'){
            return;
          }
        }
        this.amount = this.amount + buttonType;
      }
    }
  }
  ngOnInit(): void {
  }

}
