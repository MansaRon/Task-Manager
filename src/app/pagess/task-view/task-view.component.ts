import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks: any = [];

  constructor(private taskService: TasksServicesService, private router: Router) { }

  ngOnInit(): void { this.getLists() }

  public getLists() {
    this.taskService.getList().subscribe({
      next: (res) => {
        console.log(res);
        this.tasks = res;
      }, 
      error: (err) => {
        console.log(err);
      }, complete:() => { console.log('Data being loaded...') }
    })
  }

  public goToNewList() { this.router.navigateByUrl('/new-list'); }

}
