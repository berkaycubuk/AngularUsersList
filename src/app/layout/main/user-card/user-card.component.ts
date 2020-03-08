import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  @Input() userImage: string;
  @Input() userName: string;
  @Input() userLastName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
