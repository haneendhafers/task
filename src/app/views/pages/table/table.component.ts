import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public empData:any= [];
  public temp: Object=false;
  constructor() {}
  ngOnInit(): void {}

}
