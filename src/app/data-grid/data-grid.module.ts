import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './component/grid/grid.component';
import { ColumnComponent } from './component/column/column.component';
import { DataFilterPipe } from './component/grid/data-filter.pipe';
import { DataSortDirective } from './component/grid/data-sort.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [GridComponent, ColumnComponent, DataFilterPipe, DataSortDirective],
  exports: [GridComponent, ColumnComponent,DataSortDirective]

})
export class DataGridModule { }
