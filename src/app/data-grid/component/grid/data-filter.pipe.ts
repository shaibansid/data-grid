import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter',
  pure: false                                             //impure for change detection 
})
export class DataFilterPipe implements PipeTransform {

  transform(dataArray: Array<any>, args?: any): any {
    return dataArray.filter(data => data.name.toLowerCase().indexOf(args.toLowerCase()) > -1);
  }

}
