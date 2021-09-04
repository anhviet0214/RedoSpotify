import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { HeaderComponent } from './Layout/header/header.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { PlaybarComponent } from './Layout/playbar/playbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    PlaybarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
