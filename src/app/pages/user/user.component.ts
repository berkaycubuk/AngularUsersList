import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../data/users.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  data;

  constructor(
    private users: UsersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.users.getUser(this.route.snapshot.paramMap.get('id')).subscribe(users => {
      this.data = users
    });
  }

}
