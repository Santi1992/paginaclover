import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './app-material-module';
import { CardshomeComponent } from './components/cardshome/cardshome.component';
import { FooterrComponent } from './components/footerr/footerr.component';
import { VenemergenteComponent } from './components/venemergente/venemergente.component';
import { BoxemergenteComponent } from './components/boxemergente/boxemergente.component';
import { ImgcloverComponent } from './components/imgclover/imgclover.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardshomeComponent,
    FooterrComponent,
    VenemergenteComponent,
    BoxemergenteComponent,
    ImgcloverComponent
  ],
  entryComponents: [
    [BoxemergenteComponent]
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
