import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {
[x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

}
