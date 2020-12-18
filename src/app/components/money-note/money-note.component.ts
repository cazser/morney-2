import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'money-note',
  templateUrl: './money-note.component.html',
  styleUrls: ['./money-note.component.css', '../commonStyle/reset.css']
})
export class MoneyNoteComponent implements OnInit {
  note = new FormControl('');
  outputnote=''
  constructor() { }
  loseFocus(){
    this.outputnote = this.note.value;
  }
  ngOnInit(): void {
  }

}
