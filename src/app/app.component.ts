import { Component } from '@angular/core';


export class Vetements {
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><p>{{vetements.title}} details!</p><div><label>id: </label>{{vetement.id}}</div><div> <label>title: </label><input [(ngModel)]="vetement.title" placeholder="name"></div>',
    

  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'My first page E-Commerce !';
  vetements = 'Pantalons';
}

const VETEMENTS: Vetements[] = [
  { id: 1, name: 'Pantalons' },
  { id: 2, name: 'Jupes' },
  { id: 3, name: 'Robes' },
  { id: 4, name: 'T-shirts' },
  { id: 5, name: 'Debardeurs' }
];

