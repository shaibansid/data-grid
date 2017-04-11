import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './component/grid/grid.component';
import { ColumnComponent } from './component/column/column.component';
import { DataFilterPipe } from './component/grid/data-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [GridComponent, ColumnComponent, DataFilterPipe],
  exports: [GridComponent, ColumnComponent]

})
export class DataGridModule { }
