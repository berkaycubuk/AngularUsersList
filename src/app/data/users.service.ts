import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: number = 0) {
    if(pageNumber == 0) {
      return this.http.get('https://reqres.in/api/users');
    } else {
      return this.http.get('https://reqres.in/api/users?page=' + String(pageNumber));
    }
  }

  getUser(userId) {
    if(userId === 'number') {
      return this.http.get('https://reqres.in/api/users/' + String(userId));
    } else {
      return this.http.get('https://reqres.in/api/users/' + userId);
    }
  }

}
