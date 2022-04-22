import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {

  private url: String = 'http://localhost:3500/';

  constructor(private httpClient: HttpClient) { }

  saveList(listId: string, taskObj: Object): Observable<any> {
    return this.httpClient.post(this.url + 'lists/' + listId + '/tasks', taskObj, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  getList(listId: string): Observable<any> {
    return this.httpClient.get(this.url + "all-lists/" + listId + '/tasks', {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')})
  }

  editList(listId: string, taskId: string, taskObj: Task): Observable<any> {
    return this.httpClient.put(this.url + "lists/" + listId + "/tasks/" + taskId, taskObj, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  // deleteList(listId: string, taskObjId: string): Observable<any> {
  //   return this.httpClient.delete(this.url + "lists/" + listId + '/' + taskObjId, {
  //     headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
  //     .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
  //     .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  // }

  public saveTask(taskObj: Object): Observable<any> {
    return this.httpClient.post(this.url + "lists", taskObj, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  // public getTasksWithId(listId: string): Observable<any> { 
  //   return this.httpClient.get(this.url + "all-lists/" + listId, {
  //     headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
  //     .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
  //     .set("Accept", 'application/json').set('Content-Type', 'application/json')})
  // }

  public getTasks(): Observable<any> {
    return this.httpClient.get(this.url + "all-lists", {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')})
  }
  
  // public editTask(taskObj: Object, taskObjId: string): Observable<any> {
  //   return this.httpClient.put(this.url + "lists/" + taskObj + "/", taskObjId, {
  //     headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
  //     .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
  //     .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  // }

  // public deleteTask(taskObjId: string): Observable<any> { 
  //   return this.httpClient.delete(this.url + "lists/" + taskObjId, {
  //   headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
  //   .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
  //   .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  // }

}
