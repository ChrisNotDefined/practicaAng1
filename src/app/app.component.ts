import { Component } from '@angular/core';

export interface IUser {
  name: String;
  id: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: IUser[] = [
    {name: 'Chris', id: 1},
    {name: 'Josh', id: 2},
    {name: 'Max', id: 3},
    {name: 'Hugo', id: 4},
    {name: 'Vic', id: 5},
  ];

  constructor() {

  }

  outUsermethod(user: IUser) : void {
    console.log("Llamo: " + user.name)
  }

}
