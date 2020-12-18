import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'money-tags',
  templateUrl: './money-tags.component.html',
  styleUrls: ['./money-tags.component.css','../commonStyle/reset.css', '../commonStyle/selected.css']
})
export class MoneyTagsComponent implements OnInit {
  ngOnInit(): void {
  }
  @Output() private outer=new EventEmitter<string[]>();
  selectedTags=new Set();
  tags=['衣','食','住','行']
  
  constructor() { }
  
  sendParent(){
    let submit: string[]=[]
    this.selectedTags.forEach((tag)=>{
      submit.push(tag as string);
    })
    this.outer.emit(submit);
  }

  tagOnClick(event:MouseEvent){
    const target = event.target as Element;
    if(this.selectedTags.has(target.textContent)){
      this.selectedTags.delete(target.textContent);
      target.classList.remove("selected");
    }else{
      this.selectedTags.add(target.textContent);
      target.classList.add("selected");
    }
    this.sendParent();
  }

  newButton(){
    const tag=window.prompt("请输入新标签");
    if(tag!==null){
      if(this.tags.indexOf(tag)>=0){
        window.alert("标签名重复")
      }else if(tag===''){
        window.alert("输入为空")
      }else{
        this.tags.push(tag);
      }
    }
  }
  
  deleteSelectedTags(){
    let newTags=[]
    for(let i=0; i<this.tags.length; i++){
      if(!this.selectedTags.has(this.tags[i])){
        newTags.push(this.tags[i]);
      }
    }
    this.selectedTags = new Set();
    this.tags = newTags;
  }

}
