import { Injectable } from '@angular/core';
import { LoginUser } from '../models/loginUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { RegisterUser } from '../models/registerUser';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  path = 'https://localhost:7175/api/Auth/';
  decodedToken: any;
  userToken: any;
  TOKEN_KEY: 'token';

  jwtHelper: JwtHelperService = new JwtHelperService();

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + 'Login', loginUser, {responseType: 'text'})
      .subscribe((data) => {
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        this.router.navigateByUrl('/home');
        alert('giriş yapıldı');
        
      },err=>alert("hesap ismi veya şifre yanlış"));
  }

  register(RegisterUser: RegisterUser) {

    

    if(RegisterUser.password.length<5){
      alert("password must be greater than 5 digit");
      return;
    }
    if(RegisterUser.password.length>10){
      alert("password must be shorter than 10 digit");
      return;
    }
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', RegisterUser, { headers: headers })
      .subscribe((data) => {});

      alert("Successful");

  }
  saveToken(token:any) {
    localStorage.setItem("token", token);
  }
  logOut() {
    localStorage.removeItem("token");
    alert('çıkış yapıldı');
    this.router.navigate(['home'])
  }

  loggedIn(){
    const token: string = localStorage.getItem('token')!;
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }



}
