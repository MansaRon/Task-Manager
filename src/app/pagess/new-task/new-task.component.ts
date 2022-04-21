import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listInput: string = '';
  msg: string = '';
  ifSuccessful: boolean = false;

  constructor(private taskService: TasksServicesService, private router: Router) { }

  ngOnInit(): void {}

  public newTask(titleInput: string) {
    if (titleInput == '' || titleInput == null || titleInput == undefined) {
      this.msg = 'Please enter in a list before saving.';
      this.ifSuccessful = false;
    } else {
      let list = {
        "title": titleInput
      }
      this.taskService.saveTask(list).subscribe({
        next: (res) => {
          console.log(res);
          this.msg = 'List Added.';
          this.ifSuccessful = true;
          this.router.navigateByUrl('/');
        }, 
        error: (err) => {
          console.log(err);
        }, complete:() => { console.log('Data being loaded...'); this.msg = ''; }
      })
    }
  }

}
