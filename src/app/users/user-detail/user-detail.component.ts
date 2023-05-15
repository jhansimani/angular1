import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.user = this.activatedRoute.params.subscribe((params) => {
      let id = +params['id'];
      this.user = this.userService.getUser(id);
      console.log(this.user);
    });
  }
}
