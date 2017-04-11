import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnInput } from '../../../app.interface';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'data-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {

  @Input() dataArray: Array<any> = [];
  @Input('placeholder') fPlaceholder: string = 'Search';
  @Input('filter') beFilter: boolean = false;
  @Input('sort') beSort: boolean = false;

  @Output() sortEvent = new EventEmitter();

  filterArg: string = '';

  private columns: ColumnComponent[] = [];
  constructor() { }

  ngOnInit() {
  }

  getColumnData(cData): void {
    this.columns.push(cData);
  }

  sortChangeCalled(event) {
    console.log('sortChangeCalled',event);
    this.dataArray.sort(this.getArraySort(event.column,event.sort));
  }

  getArraySort(property,sortType) {

   let sortOrder = sortType == 'asc' ? 1 : -1;
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }



}
