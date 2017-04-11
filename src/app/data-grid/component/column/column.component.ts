import { Component, OnInit, Input } from '@angular/core';
import { GridComponent } from '../grid/grid.component'
@Component({
  selector: 'data-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() key:string;
  @Input() name:string;

  constructor( grid:GridComponent ) { 
   grid.getColumnData(this);
  }

  ngOnInit() {
  }

}
