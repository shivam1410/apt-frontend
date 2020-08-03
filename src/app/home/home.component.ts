import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    console.log("logout called")
    this.route.navigate(['../login']);
  }
}
