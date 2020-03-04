import { Component, OnInit, Injectable } from '@angular/core';
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

  characterSortAttr: string;
  filtersSelected:boolean;
  characters = Characters;
  selectedFilters: string[]=[];
  isFilter:number;


  filtered(filter) {
    this.isFilter = this.selectedFilters.indexOf(filter);

    if(this.isFilter === -1){
      this.selectedFilters.push(filter);
      this.filtersSelected = true;
    console.log(this.selectedFilters);
    }else{
      this.selectedFilters.splice(this.isFilter,1);
      if(this.selectedFilters.length===0)
          this.filtersSelected = false;
    }
  }


}
