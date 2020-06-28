import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // productos = [
  //   {
  //   nombre: "cpu",
  //   precio: 500,
  //   descuento: 15
  // },
  //   {
  //   nombre: "teclado",
  //   precio: 500,
  //   descuento: 0
  // },
  //   {
  //   nombre: "cpu",
  //   precio: 500,
  //   descuento: 0
  // }

  // ]

  

  constructor() { }

  ngOnInit() {
  }

  navegar(x:number,element:any){
    let referencia = x - 1
    console.log(referencia)
    console.log(element[referencia])
   element[referencia].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

}
