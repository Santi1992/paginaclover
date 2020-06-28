import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venemergente',
  templateUrl: './venemergente.component.html',
  styleUrls: ['./venemergente.component.css']
})
export class VenemergenteComponent implements OnInit {

  propiedades:Object = {}

  constructor() { }

  ngOnInit() {
  }


  myFunction(){
  this.propiedades={
    popup: true,
    show: true
  }

  }
  

}
