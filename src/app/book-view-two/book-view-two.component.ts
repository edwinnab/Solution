import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-view-two',
  templateUrl: './book-view-two.component.html',
  styleUrls: ['./book-view-two.component.scss']
})
export class BookViewTwoComponent implements OnInit {

  name = this.route.snapshot.queryParams['name']


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
