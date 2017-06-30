import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DndapiService } from '../dndapi.service';
declare var $:any;


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  providers: [ DndapiService ]
})
export class StatsComponent implements OnInit {

  constructor(private router: Router, private http: Http, private dndapiService: DndapiService) { }
  classResponse: Response;
  ngOnInit() {
    this.classResponse = this.dndapiService.getClasses();
    console.log(this.classResponse);
  }

  getBonus(charClass: string) {
    $('.showClass').text("The class you have chosen is " + charClass + ".");

    // let classes$ = this.http.setRequestHeader('Access-Control-Allow-Origin', '*').get(this.apiUrl).subscribe(data => {
    //   this.classResponse = data;
    //   console.log(this.classResponse);
    // });
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    $.get('http://dnd5eapi.co/api/classes/' + charClass, function(response) {
      console.log(response);
    });
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}
