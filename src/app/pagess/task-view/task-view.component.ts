import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  title: string = 'List From The Front End Project';

  constructor(private taskService: TasksServicesService, private httpClient: HttpClient) { }

  ngOnInit(): void { this.getLists() }

  public getLists() {
    this.taskService.getList().subscribe({
      next: (res) => {
        console.log(res);
      }, 
      error: (err) => {
        console.log(err);
      }, complete:() => { console.log('Data being loaded...') }
    })
  }

  public newList() {
    let list = {
      "title": 'New list from the frontend.'
    }
    this.taskService.saveList(list).subscribe({
      next: (res) => {
        console.log(res);
      }, 
      error: (err) => {
        console.log(err);
      }, complete:() => { console.log('Data being loaded...') }
    })
  }

}
