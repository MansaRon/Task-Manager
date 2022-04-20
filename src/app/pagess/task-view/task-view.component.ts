import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks: any = [];
  lists: any = [];

  constructor(private taskService: TasksServicesService, private router: Router, private params: ActivatedRoute) { }

  ngOnInit(): void { this.getTasks(), this.getListId() }

  public getListId(): void {
    this.params.params.subscribe((param: Params) => {
      console.log(param);
    })
  }

  public getTasks() {
    this.taskService.getTasks().subscribe({
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

  public getLists() {  }

}
