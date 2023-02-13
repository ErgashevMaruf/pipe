import { Component } from '@angular/core';
import { language } from './pipes/price.pipe';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  producs: Product[] = [
    { name: 'Applle', price: 1235 },
    { name: 'Pine apple', price: 135 },
    { name: 'Sugar', price: 15 },
  ];

  currentLanguage?: language;
}
