import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() envio:EventEmitter<number>

  navPrimero:string = ""
  navSegundo:string = ""
  navTercero:string = ""
  navCuarto:string = ""

  constructor() {

    this.envio = new EventEmitter()
   }

  ngOnInit() {
  }

  navegarTo(x:number){
    if(x === 1){
      this.navPrimero = "black"
      this.navSegundo = ""
      this.navTercero = ""
      this.navCuarto = ""
      this.envio.emit(x)
    } else if (x === 2){
      this.navPrimero = ""
      this.navSegundo = "black"
      this.navTercero = ""
      this.navCuarto = ""
      this.envio.emit(x)
    } else if (x === 3) {
      this.navPrimero = ""
      this.navSegundo = ""
      this.navTercero = "black"
      this.navCuarto = ""
      this.envio.emit(x)
    } else {
      this.navPrimero = ""
      this.navSegundo = ""
      this.navTercero = ""
      this.navCuarto = "black"
      this.envio.emit(x)
    }
   
  }

}
