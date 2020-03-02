import { Component, OnInit } from '@angular/core';
// import { CharacterDetails } from '../rick-and-mortys';
import { Characters } from '../mock-characters';

@Component({
  selector: 'app-rick-and-mortys',
  templateUrl: './rick-and-mortys.component.html',
  styleUrls: ['./rick-and-mortys.component.css']
})
export class RickAndMortysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date : number = Date.now();

  // rick: CharacterDetails = {
  //   id: 1,
  // name: 'rick',
  // status:'Alive',
  // species:'Human',
  // gender:'Male',
  // image:'Image',
  // created:this.date,
  // origin:'Earth',
  // location:'c-dimension'
  // }
characters = Characters;
}
