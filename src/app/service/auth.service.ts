import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $URL = 'http://localhost:8000/';
  auth;
  constructor(
    private http: HttpClient,
  ) { 
    this.auth = false;
  }

  isAuthenticated(){
    return this.auth;
  }

  login(email, passwd){
    const header = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post(`${this.$URL}login?email=${email}&password=${passwd}`,{headers: header})
  }
}
