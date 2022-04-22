import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks!: Task[];
  lists!: List[];
  listId: string = '';

  constructor(private taskService: TasksServicesService, private router: Router, private params: ActivatedRoute) { }

  ngOnInit(): void { this.getTasks(); this.getListId() }

  public getTasks() {
    this.taskService.getTasks().subscribe({
      next: (lists: List[]) => { console.log(lists); this.lists = lists }, 
      error: (err) => { console.log(err); }, 
      complete:() => { console.log('Data being loaded...') }
    })
  }

  public getListId(): void { 
    this.params.params.subscribe((param: Params) => { 
      console.log(param);
      this.listId = param['listId'];
      //this.getTasksId(param['listId']);
      if (this.listId) {
        this.taskService.getList(param['listId']).subscribe({ 
          next: (tasks: Task[]) => { this.tasks = tasks; console.log(this.tasks) }, 
          error: (error) => {console.log(error) }, 
          complete:() => {console.log('Lists are being loaded...') }
        })
      }
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

  public goAddTask() { this.router.navigate(['lists', this.listId, 'new-task']) };

  public onTaskClick(task: Task) { 
    console.log(task);
    let obj = { 
      "_id": task._id,
      "_listId": task._listId,
      "completed": task.completed = true,
      "title": task.title
    };
    this.taskService.editList(this.listId, task._id, obj).subscribe({
      next: (taskResult: Task[]) => { console.log(taskResult) },
      error: (error) => { console.log(error) },
      complete:() => { console.log('Task has been edited...') }
    })
  }

}
