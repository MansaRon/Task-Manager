import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string = ''; listInput: string = ''; msg: string = '';

  constructor(private taskService: TasksServicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { this.route.params.subscribe((param: Params) => { this.listId = param['listId'] }) }

  public goBack() {
    this.router.navigate(['lists', this.listId]);
  }

  public newTask(titleInput: string) {
    if (titleInput == '' || titleInput == null || titleInput == undefined) {
      this.msg = 'Please enter in a list before saving.';
    } else {
      let list = { "title": titleInput }
      this.taskService.saveList(this.listId, list).subscribe({
        next: (res: Task) => { this.router.navigate(['lists', res._listId]) }, 
        error: (err) => { console.log(err) }, 
        complete:() => {}
      })
    }
  }

}
