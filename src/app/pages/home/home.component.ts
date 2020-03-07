import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../data/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title: string = 'Home Title';

  constructor(private users: UsersService) { }

  ngOnInit(): void {

  }

}
