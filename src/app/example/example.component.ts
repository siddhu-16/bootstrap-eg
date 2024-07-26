import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }
  // private mySub : any
  
  @Input() products : any;
  ngOnInit(): void {

    // const pro = new Promise( resolve =>{
    //   console.log('promise called');
    //   setTimeout(()=>{
    //     resolve('promise resolved');
    //   },1000)
      
    // })

    // pro.then(res => console.log(res))

    // const  obv = new Observable(sub =>{
    //   console.log('observable called');
    //   let count = 0
    //   setInterval(()=>{
    //     count = count+1
      
    //     sub.next(count);
    //   },1000)
    // })

    //  this.mySub = obv.subscribe(res => console.log(res))

     console.log(this.products);
     
  }

  // ngOnDestroy(): void {
  //     this.mySub.unsubscribe()
  // }


  
}
