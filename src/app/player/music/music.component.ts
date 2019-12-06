import { Component, OnInit, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';
import { MusicService } from 'src/services/music.service';
import { userId, fileURL } from 'src/services/constants';
import { Music } from 'src/model/music.model';
import { EventEmitterService } from 'src/services/event-emitter.service';
import { Track } from 'ngx-audio-player';
import { MatMenuTrigger, MatDialog } from '@angular/material';
import { EditMusicComponent } from 'src/dialogs/edit-music-dialog/edit-music-dialog.component';
import { AddToPlaylistDialogComponent } from 'src/dialogs/add-to-playlist-dialog/add-to-playlist-dialog.component';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
    
    musics: Music[];
    
    constructor(public dialog: MatDialog, private musicService: MusicService, private eventEmitterService: EventEmitterService) { }
    
    ngOnInit() {
        this.musicService.getMusicByUserId(userId)
        .subscribe(res => {
            this.musics = res;
            console.log(this.musics)
        });
    }
    
    openDialog(music: Music): void {
        const dialogRef = this.dialog.open(EditMusicComponent, {
            width: '550px',
            data: {music: music}
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
    
    openPlaylistDialog(music: Music): void {
        const dialogRef = this.dialog.open(AddToPlaylistDialogComponent, {
            width: '550px',
            data: {music: music}
        });
        
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
    
    playMusic(music: Music) {
        let track: Track = new Track();
        track.link = fileURL+music.Dir_music.replace(/\~/g, "");
        track.title = music.Name;
        this.eventEmitterService.emitPlaylistChange([track])
    }

    editMusicInfo(music: Music) {
        this.openDialog(music);
    }

    addMusicToPlaylist(music: Music) {
        this.openPlaylistDialog(music);
    }
    
}
