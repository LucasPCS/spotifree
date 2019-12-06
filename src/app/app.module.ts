import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayerComponent } from './player/player.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PlaylistComponent } from './player/playlist/playlist.component';
import { MusicComponent } from './player/music/music.component';
import { PlaylistItemComponent } from './player/playlist/playlist-item/playlist-item.component';
import { EventEmitterService } from 'src/services/event-emitter.service';
import { CategoryComponent } from './player/category/category.component';
import { CategoryItemComponent } from './player/category/category-item/category-item.component';
import { NewDialogComponent } from 'src/dialogs/new-dialog/new-dialog.component';
import { EditMusicComponent } from 'src/dialogs/edit-music-dialog/edit-music-dialog.component';
import { AddToPlaylistDialogComponent } from 'src/dialogs/add-to-playlist-dialog/add-to-playlist-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        PlayerComponent,
        SideMenuComponent,
        PlaylistComponent,
        MusicComponent,
        PlaylistItemComponent,
        CategoryComponent,
        CategoryItemComponent,
        NewDialogComponent,
        EditMusicComponent,
        AddToPlaylistDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatSidenavModule,
        NgxAudioPlayerModule,
        HttpClientModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule
    ],
    providers: [EventEmitterService],
    bootstrap: [AppComponent],
    entryComponents: [
        NewDialogComponent,
        EditMusicComponent,
        AddToPlaylistDialogComponent
    ]
})
export class AppModule { }
