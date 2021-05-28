import { Component, OnInit } from '@angular/core';
import { Favourite } from '../Model/favourite';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordMatch, PasswordDifferent } from '../_helpers/password-match.validator';
import { AppComponent } from '../app.component';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  
  favList: Favourite[] = [];
  p: any;
  cname: string = "fa fa-heart";
  //@Input() uname:string;

  ngOnInit() {
    this.getNotes().subscribe(
      res => {
        this.favList = res;
      });
  }

  getNotes(): Observable<any> {
    return this.httpClient.get(`http://localhost:8004/recommend/getrecommendSong/${sessionStorage.getItem('loggedUser')}`);
  }
  constructor(private httpClient: HttpClient) { }
  delete(num: any, note) {
    var elem = document.getElementById(String(num));
    if (elem["classList"].value === "fa fa-heart") {
      elem["classList"].value = "fa fa-heart-o";
      let objfev = {
        //username:this._interactionService.getMessage(),
        username: sessionStorage.getItem('loggedUser'),
        songname: note.trackName,
        artist: note.artist,
        url: note.url,
      }
      console.log(note);

      console.log(objfev);
      this.httpClient.post('http://localhost:8004/recommend/removeSong', objfev).toPromise().then((data: any) => {
        console.log(data);
      });
    }
    this.ngOnInit();
    // location.reload()
  }




}