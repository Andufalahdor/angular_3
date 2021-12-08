import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public editMode = false;
  public editText!: string;
  public editIndex!: number;

  @Input() taskListCh:any 
  @Output() indexDel: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeStat: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeName: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(i: number): void {
    this.indexDel.emit(i);
  }

  changeStatus(i: number): void{
    this.changeStat.emit(i);
  }

  editTask(i: number):void {
    this.editMode = true;
    this.editText = this.taskListCh[i].name
    this.editIndex = i;
  }

  saveChange():void{
    if (this.editText) {
    let obj = {
      text: this.editText,
      index: this.editIndex
    }
    this.changeName.emit(obj);
    this.editText = '';
    this.editIndex = NaN;
    this.editMode = false;
  }
}
}
