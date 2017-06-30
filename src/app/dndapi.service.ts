import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
declare var $:any;
@Injectable()
export class DndapiService {
private apiUrl = 'http://dnd5eapi.co/api';
  constructor(private http: Http) { }

  getClasses() {


    // let classes$ = this.http.setRequestHeader('Access-Control-Allow-Origin', '*').get(this.apiUrl).subscribe(data => {
    //   this.classResponse = data;
    //   console.log(this.classResponse);
    // })
    return $.get('https://jsonplaceholder.typicode.com/posts');
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}
