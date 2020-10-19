import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../app.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() User : IUser;
  @Output() outUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  onSendData() : void {
    this.outUser.emit(this.User)
  }

  putButton(): boolean {
    return Number(this.User.id) % 2 === 0
  }
}
