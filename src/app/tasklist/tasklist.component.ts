import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  public taskName!: string;
  public user = 'Ivan Ivanov.'
  public taskList:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask():void {
    if (this.taskName) {
     let obj = {
        name: this.taskName, 
        status: false
     }
     this.taskList.push(obj) 
     console.log(this.taskList);
     this.taskName = ''
    }
  }

  indexDelete(number:number):void {
    this.taskList.splice(number, 1);
  }

  changeStatus(number:number):void{
    this.taskList[number].status = !this.taskList[number].status
  }

  
  changeName(obj:any):void{
    console.log(obj.index);
    this.taskList[obj.index].name = obj.text
  }

}
