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
    return this.httpClient.post("http://localhost:3500/lists", listObj, {
      headers: new HttpHeaders()
      .set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, content-type")
      .set("Access-Control-Allow-Origin", "*")
      .set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH")
      .set("Accept", 'application/json')
      .set('Content-Type', 'application/json')});
  }

  getList() {
    return this.httpClient.get(this.url + "all-lists")
  }

  editList(listObj: Object, listObjId: string) {
    return this.httpClient.put(this.url + "lists/" + listObj + "/", listObjId);
  }

  deleteList(listObjId: string) {
    return this.httpClient.delete(this.url + "lists/" + listObjId);
  }

}
