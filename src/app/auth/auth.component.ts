import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login = (d) =>{
    this.auth.login(d.email, d.password).subscribe(
      d=>{
      console.log(d);
      if(d['check'] == true ){
        this.auth.auth = true;
        this.router.navigate(['/home'],{queryParams: {'name': d[name]}})
      }
    },e=>{
      console.log(e);
    });
  }
}
