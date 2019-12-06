import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Track } from 'ngx-audio-player';
import { MatDialog } from '@angular/material';
import { NewDialogComponent } from 'src/dialogs/new-dialog/new-dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
    isUserLoggedIn = false;
    displayPlaylist = false;
    
    constructor(public dialog: MatDialog) { }
    
    ngOnInit() {
    }
    
    openDialog(): void {
        const dialogRef = this.dialog.open(NewDialogComponent, {
            width: '550px',
            data: {name: "aaaaaaa", animal: "aaaaaaaaaaaaaaaaaaaaaa"}
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
    
    doLogin(isLoggedIn) {
        this.isUserLoggedIn = isLoggedIn;
    }
    
    togglePlayList() {
        this.displayPlaylist = !this.displayPlaylist;
    }
    
}
