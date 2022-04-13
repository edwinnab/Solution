import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


/*since I did not have an API/service file
I did try replicating the functionality needed by having the token array defined in this class*/
const token = [
  {
    "position": [
      1,
      2
    ],
    "value": "a"
  },
  {
    "position": [
      3,
      6
    ],
    "value": "cow"
  },
  {
    "position": [
      7,
      10
    ],
    "value": "has"
  },
  {
    "position": [
      11,
      12
    ],
    "value": "four"
  },
  {
    "position": [
      13,
      17
    ],
    "value": "legs"
  }
]

@Component({
  selector: 'app-book-view-one',
  templateUrl: './book-view-one.component.html',
  styleUrls: ['./book-view-one.component.scss']
})
export class BookViewOneComponent implements OnInit {

  constructor(private router: Router) { }

  content = "A cow has 4 legs.";
  split = this.content.split("");
  /*log function, that maps the token indexes to the value displayed on the second view
   */

  log(i:any){
    token.map((e) =>{
      if (i >= e.position[0] && i <= e.position[1]){
        console.log(`yes at ${e.value}`); //checks if the token value is collected correctly
        this.router.navigate(['tokenValue'],  {queryParams: {name: e.value}})
      }
    })
  }

  ngOnInit(): void { }

}
