import { Component, OnInit, Input } from '@angular/core';
import { ColumnInput } from '../../../app.interface';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'data-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {

  @Input() dataArray:Array<any> = [];
  @Input('placeholder') fPlaceholder:string = 'Search';
  @Input('filter') beFilter:boolean = false;

  filterArg:string = '' ;
  
  private columns: ColumnComponent[] = [];
  constructor() { }

  ngOnInit() {
  }

  getColumnData(cData): void {
    this.columns.push(cData);
  }

}
