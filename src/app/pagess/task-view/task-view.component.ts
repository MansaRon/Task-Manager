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

  ngOnInit(): void { this.getTasks(); this.getListId() }

  public getTasks() {
    this.taskService.getTasks().subscribe({
      next: (lists: any[]) => { console.log(lists); this.lists = lists }, 
      error: (err) => { console.log(err); }, 
      complete:() => { console.log('Data being loaded...') }
    })
  }

  public getListId(): void { 
    this.params.params.subscribe((param: Params) => { 
      console.log(param);
      //this.getTasksId(param['listId']);
      this.taskService.getList(param['listId']).subscribe((tasks: any[]) => {
        this.tasks = tasks;
        console.log(this.tasks);
      })
    }); 
  }

  // public getTasksId(listId: string) {
  //   this.taskService.getTasksWithId(listId).subscribe({
  //     next: (res) => { console.log(res); this.tasks = res; }, 
  //     error: (err) => { console.log(err); }, 
  //     complete:() => { console.log('Data being loaded...') }
  //   })
  // }

  // public getLists(listId: string) { 
  //   this.taskService.getList(listId).subscribe((listData: any) => {
  //     console.log(listData);
  //     if (listId == listData._listId) {
  //       this.lists = listData;
  //       console.log(this.lists)
  //     }
  //     ;
  //   }) 
  // }

  // public checkTaskClicked(task: string) {
  //   if (task) {
  //     console.log(task);
  //     this.getLists(task);
  //   }
  // }

  public goToNewList() { this.router.navigateByUrl('/new-list') };

  public goAddTask() { this.router.navigateByUrl('/new-task') };

}
