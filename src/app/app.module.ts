import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    NgxAudioPlayerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
