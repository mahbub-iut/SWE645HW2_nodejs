import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {


  // readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  readonly ROOT_URL = "http://35.224.162.205/surveywebjpa-RestAPI/rest/surveys/allsurvey";
  readonly proxyurl = "https://cors-anywhere.herokuapp.com/";
  posts: Observable<any[]> | undefined;
  angForm: FormGroup;



  constructor(private fb: FormBuilder, private http: HttpClient) {
    // this.createForm();
  }




  getPosts() {
    this.posts = this.http.get<any[]>(this.proxyurl + this.ROOT_URL);    //'/posts'
    // this.http.get(this.proxyurl+this.ROOT_URL).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
  }









}

