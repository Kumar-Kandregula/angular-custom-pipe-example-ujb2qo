import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSize',
})
export class ConvertSizePipe implements PipeTransform {
  transform(value: number, unit: string): string {
    switch (unit) {
      case 'MB':
        return (value / 1024).toFixed(2) + ' MB';
      case 'GB':
        return (value / (1024 * 1024)).toFixed(2) + ' GB';
      case 'TB':
        return (value / (1024 * 1024 * 1024)).toFixed(2) + ' TB';
      default:
        return value + ' KB';
    }
  }
}
