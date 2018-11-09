import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mycustomePipeName'})
export class ExpontialStrengthPipe implements PipeTransform {
  transform(value: number, expo: string ): number {
    let exp = parseFloat(expo);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }


}
