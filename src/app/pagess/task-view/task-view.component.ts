import { Component, OnInit } from '@angular/core';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  title: string = 'List From The Front End Project';

  constructor(private taskService: TasksServicesService) { }

  ngOnInit(): void {}

  public newList() {
    console.log(this.title);
    this.taskService.saveList(this.title).subscribe({
      next: (res) => {
        console.log(res);
      }, 
      error: (err) => {
        console.log(err);
      }, complete:() => { console.log('Data being loaded...') }
    })
  }

}
