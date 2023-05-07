import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {

  transform(value: string): string {
    let ref_book: string = 'Ref-'+ value;
    return ref_book;
  }
}
