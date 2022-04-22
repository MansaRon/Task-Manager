import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  listInput: string = ''; msg: string = '';

  constructor(private taskService: TasksServicesService, private router: Router) { }

  ngOnInit(): void {}

  public goBack() {
    this.router.navigateByUrl('/lists');
  }

  public newList(titleInput: string) {
    if (titleInput == '' || titleInput == null || titleInput == undefined) {
      this.msg = 'Please enter in a list before saving.';
    } else {
      let list = { "title": titleInput }
      this.taskService.saveTask(list).subscribe({
        next: (res: List) => { this.router.navigate(['/lists', res._id]); }, 
        error: (err) => { console.log(err) }, 
        complete:() => {}
      })
    }
  }


}
