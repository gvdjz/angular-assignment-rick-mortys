import { Component, OnInit, Injectable } from '@angular/core';
// import { CharacterDetails } from '../rick-and-mortys';
import { Characters } from '../mock-characters';
import { CharacterDetails } from '../rick-and-mortys';

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
  characters: CharacterDetails[] = Characters;
  result: CharacterDetails[] = [];
  selectedFilters: string[]=[];
  isFilter:number;
  gender: boolean = false;
  species: boolean = false;
  origin: boolean = false;
  searchName: string = "";


  filtered(filter) {
    console.log(filter);
    this.isFilter = this.selectedFilters.indexOf(filter);
    console.log(this.isFilter);

    if(this.isFilter === -1){
      this.selectedFilters.push(filter);

      if(filter === 'Male' || filter==='Female'){
        if(!this.gender){
          this.filterCharacters(filter,this.gender);
          this.gender = !this.gender;

          if(this.species)
            this.species = !this.species;

          if(this.origin)
            this.origin = !this.origin;
        }
        else
          this.filterCharacters(filter, this.gender);
      }
      else if(filter === 'Human' || filter==='Alien' || filter==='Mythalog'){
        if(!this.species){
          this.filterCharacters(filter,this.species);
          this.species = !this.species;

          if(this.gender)
            this.gender = !this.gender;

          if(this.origin)
            this.origin = !this.origin;
        }
        else
          this.filterCharacters(filter, this.species);
      }
      else if(filter === 'Earth (C-137)' || filter==='Abadango' || filter==='unknown'){
        if(!this.origin){
          this.filterCharacters(filter,this.origin);
          this.origin = !this.origin;

          if(this.gender)
            this.gender = !this.gender;

          if(this.species)
            this.species = !this.species;
        }
        else
          this.filterCharacters(filter, this.origin);
      }

      this.filtersSelected = true;
    }else{
      this.selectedFilters.splice(this.isFilter,1);
      if(this.selectedFilters.length)
          this.removeFilterCharacters(filter);
      else{
        this.filtersSelected = false;
        this.characters = Characters;
      }
    }
  }

  filterCharacters(filter, val){

    this.result = Characters.filter(character => {
      if(character.gender === filter)
          return character;
      else if(character.species === filter)
              return character;
            else if(character.origin.name === filter)
                    return character;
        });
 // console.log(this.result);

      if(this.filtersSelected && !val){
        this.characters = this.characters.filter(el => this.result.includes(el));
      }
      else if(this.filtersSelected && val){
        this.characters = [...this.characters , ...this.result];
      }
      else
          this.characters = this.result;
  }

  removeFilterCharacters(filter) {
    this.result = Characters.filter(character => {
      if(character.gender === filter)
          return character;
      else if(character.species === filter)
              return character;
            else if(character.origin.name === filter)
                    return character;
        });


        this.characters = this.characters.filter(el => !this.result.includes(el));
  }

  showSearchResults(name) {
    this.searchName = name;
    this.characters = this.characters.filter(character => character.name.includes(this.searchName));
  }

  closeResults(){
    this.characters = Characters;
    this.searchName = "";
    console.log(this.characters);
  }
}
