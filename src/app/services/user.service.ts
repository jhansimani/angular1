import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any = [];

  constructor(private http: HttpClient) {}

  addUser(user: any) {
    const userObj = { ...user, id: this.users.length + 1 };
    this.users.push(userObj);
  }
  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    return this.users.find((user: any) => user.id === id);
  }
  getCovidData(): Observable<any> {
    return this.http.get('https://data.covid19india.org/v4/min/data.min.json');
    // return of
  }
}
