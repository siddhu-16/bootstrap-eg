import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bootstrap-eg';


  public products = [

    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },

  ]

  public topProd = [
    { id: 1, name: 'Phone 1', price: 100 },
    { id: 2, name: 'Phone 2', price: 200 },
    { id: 3, name: 'Phone 3', price: 300 },
    { id: 4, name: 'Phone 4', price: 400 },
    { id: 5, name: 'Phone 5', price: 500 },
    // { id: 6, name: 'Phone 6', price: 600 },
  ]
}
