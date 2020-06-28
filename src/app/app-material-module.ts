import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card'
import { MatInputModule} from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { MatTabsModule} from '@angular/material/tabs'
import { MatChipsModule} from '@angular/material/chips'
import { MatSelectModule} from '@angular/material/select'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list'
import { MatMenuModule} from '@angular/material/menu'
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar'




const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatChipsModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatDialogModule

];

@NgModule({
  imports: modules,
  providers: [
 
  
  ],
  exports: modules,
})
export class MaterialModule {}