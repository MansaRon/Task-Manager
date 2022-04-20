import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksServicesService } from 'src/app/tasks-services.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  listInput: string = '';
  msg: string = '';
  ifSuccessful: boolean = false;
  publicTimer: any;
  counter: number = 5;

  constructor(private taskService: TasksServicesService, private router: Router) { }

  ngOnInit(): void {}

  public goBack() {
    this.router.navigateByUrl('/');
  }

  // public newList() {
  //   if (this.listInput == '' || this.listInput == null || this.listInput == undefined) {
  //     this.msg = 'Please enter in a list before saving.';
  //     this.ifSuccessful = false;
  //   } else {
  //     let list = {
  //       "title": this.listInput
  //     }
  //     this.taskService.saveList(list).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.msg = 'List Added.';
  //         this.ifSuccessful = true;
  //         this.router.navigateByUrl('/');
  //       }, 
  //       error: (err) => {
  //         console.log(err);
  //       }, complete:() => { console.log('Data being loaded...'); this.msg = ''; }
  //     })
  //   }
  // }

  public newList(titleInput: string) {
    if (titleInput == '' || titleInput == null || titleInput == undefined) {
      this.msg = 'Please enter in a list before saving.';
      this.ifSuccessful = false;
    } else {
      let list = {
        "title": titleInput
      }
      this.taskService.saveList(list).subscribe({
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
