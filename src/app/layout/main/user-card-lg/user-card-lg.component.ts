import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-lg',
  templateUrl: './user-card-lg.component.html',
  styleUrls: ['./user-card-lg.component.sass']
})
export class UserCardLgComponent implements OnInit {

  @Input() userImage: string;
  @Input() userName: string;
  @Input() userLastName: string;
  @Input() userEmail: string;

  constructor() { }

  ngOnInit(): void {
  }

}
