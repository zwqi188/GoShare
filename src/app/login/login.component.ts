import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  contact_id: number;
  detail:any = {};
  contacts:any = {};
  private sub:any;

  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
   
  }




}
