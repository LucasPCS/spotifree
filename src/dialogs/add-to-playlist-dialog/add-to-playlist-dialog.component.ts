import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/model/category.model';
import { CategoryService } from 'src/services/category.service';
import { MusicService } from 'src/services/music.service';
import { userId } from 'src/services/constants';
import { PlaylistService } from 'src/services/playlist.service';
import { Music } from 'src/model/music.model';
import { Playlist } from 'src/model/playlist.model';

@Component({
    selector: 'app-add-to-playlist-dialog',
    templateUrl: 'add-to-playlist-dialog.html',
})
export class AddToPlaylistDialogComponent implements OnInit {

    playlists: Playlist[] = [];

    selected = null;
    
    constructor(private playlistService: PlaylistService, public dialogRef: MatDialogRef<AddToPlaylistDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        console.log(this.data)
        this.playlistService.getPlaylistByUserId(userId)
        .subscribe(res => {
            this.playlists = res;
            this.selected = this.playlists[0].Id;
        })
    }

    addMusicToPlaylist() {
        this.playlistService.addMusicToPlaylist(this.data.music.Id, this.selected)
        .subscribe(res => {
            alert("Adicionado com sucesso")
            this.onNoClick();
        })
    }
}
