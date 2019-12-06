import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Track } from 'ngx-audio-player';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    isUserLoggedIn = true;
    displayPlaylist = false;
    
    constructor() { }
    
    ngOnInit() {
    }

    doLogin(isLoggedIn) {
        this.isUserLoggedIn = isLoggedIn;
    }

    togglePlayList() {
        this.displayPlaylist = !this.displayPlaylist;
    }
    
}
