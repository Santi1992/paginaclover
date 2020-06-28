import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BoxemergenteComponent } from '../boxemergente/boxemergente.component';


@Component({
  selector: 'app-cardshome',
  templateUrl: './cardshome.component.html',
  styleUrls: ['./cardshome.component.css']
})
export class CardshomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  open() {
    
    this.dialog.open(BoxemergenteComponent);
  }


}
