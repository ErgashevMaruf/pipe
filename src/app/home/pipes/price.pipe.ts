import { Pipe, PipeTransform } from '@angular/core';

export type language = 'uz' | 'en' | 'ru';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number, language: language = 'uz', isLowerCase = false): string {
    let suffix = ' UZS';
    switch (language) {
      case 'en':
        suffix = ' USD';
        break;

      case 'ru':
        suffix = ' RUBL';
        break;
    }

    return `${value} ${isLowerCase ? suffix.toLowerCase() : suffix}`;
  }
}
