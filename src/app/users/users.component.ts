import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  users: any[] = [];
  covidData: any[] = [];
  ngOnInit() {
    this.users = this.userService.getUsers();
    // console.log(this.users);

    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }
  routeTo(id: number) {
    this.router.navigate(['users', id]);
  }
}
