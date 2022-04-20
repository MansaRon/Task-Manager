import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksServicesService {

  private url: String = 'http://localhost:3500/';

  constructor(private httpClient: HttpClient) { }

  saveList(listObj: Object): Observable<any> {
    return this.httpClient.post(this.url + "lists", listObj, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  getList(): Observable<any> {
    return this.httpClient.get(this.url + "all-lists", {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')})
  }

  editList(listObj: Object, listObjId: string): Observable<any> {
    return this.httpClient.put(this.url + "lists/" + listObj + "/", listObjId, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  deleteList(listObjId: string): Observable<any> {
    return this.httpClient.delete(this.url + "lists/" + listObjId, {
      headers: new HttpHeaders().set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json').set('Content-Type', 'application/json')});
  }

  public saveTask() {}

  public getTasks() {}

  public editTask() {}

  public deleteTask() {}

}
