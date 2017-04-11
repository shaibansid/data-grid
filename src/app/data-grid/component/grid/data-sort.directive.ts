import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[dataSort]'
})
export class DataSortDirective {
  @Input('columnKey') column: any;
  @Input() sort: any;
  @Output() sortChange = new EventEmitter();
  sortEventObj: any;
  constructor() {

  }

  ngAfterViewInit() {
    this.sortEventObj = {
      sort: this.sort, column: this.column
    }
    console.log(this.sortEventObj)
  }

  @HostListener('click', ['$event'])
  sortToggle(event: any) {
    event ? event.preventDefault() : true;
    switch (this.sort) {
      case 'asc':
        this.sort = this.sortEventObj.sort = 'desc';
        break;
      case 'desc':
        this.sort = this.sortEventObj.sort = 'asc';
        break;
      default:
        this.sort = this.sortEventObj.sort = 'asc';
        break;
    }

    this.sortChange.emit(this.sortEventObj);
  }
}
