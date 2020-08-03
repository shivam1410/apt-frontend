import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $URL = 'https://apt-b.herokuapp.com/';
  auth;
  constructor(
    private http: HttpClient,
  ) { 
    this.auth = false;
  }

  isAuthenticated(){
    if(this.getToken())
      return true;
    else return false;
  }

  login(email, passwd){
    const header = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post(`${this.$URL}login?email=${email}&password=${passwd}`,{headers: header})
  }

  logout(){
    this.rmToken();
  }
  setToken = (token) => {return window.localStorage.setItem('token',token)};

  rmToken = () => {return window.localStorage.removeItem('token')};

  getToken = () => {return window.localStorage.getItem('token')};

}
