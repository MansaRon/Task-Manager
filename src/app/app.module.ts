import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NewListComponent } from './pagess/new-list/new-list.component';
import { TaskViewComponent } from './pagess/task-view/task-view.component';
import { NewTaskComponent } from './pagess/new-task/new-task.component';

@NgModule({
  declarations: [ AppComponent, TaskViewComponent, NewListComponent, NewTaskComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
