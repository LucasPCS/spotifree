import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/model/category.model';
import { CategoryService } from 'src/services/category.service';
import { MusicService } from 'src/services/music.service';
import { userId } from 'src/services/constants';
import { PlaylistService } from 'src/services/playlist.service';

@Component({
    selector: 'app-new-dialog',
    templateUrl: 'new-dialog.html',
})
export class NewDialogComponent implements OnInit {

    isMusic = false;
    isPlaylist = false;

    fileToUpload: File = null;

    categories: Category[] = [];

    selected = null;

    musicName = "";
    playlistName = "";
    
    constructor(private playlistService: PlaylistService, private musicService: MusicService, private categoryService: CategoryService, public dialogRef: MatDialogRef<NewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    addPlaylist() {
        this.isPlaylist = true;
    }

    addMusic() {
        this.isMusic = true;
    }

    ngOnInit() {
        this.categoryService.getAllCategories()
        .subscribe(res => {
            let ids = res.map(r => r.Id);
            this.categories = res.filter((r,i) => ids.indexOf(r.Id) == i);
            this.selected = this.categories[0].Id;
        })
    }

    uploadFile(files: FileList) {
        this.fileToUpload = files.item(0);
    }

    sendMusic() {
        this.musicService.addMusic(userId, +this.selected, this.musicName, this.fileToUpload)
        .subscribe(res => {
            alert("Música adicionada com sucesso!")
            this.onNoClick();
        })
    }

    sendPlaylist() {
        this.playlistService.addPlaylist(userId, this.playlistName)
        .subscribe(res => {
            alert("Playlist criada com sucesso!")
            this.onNoClick();
        })
    }
}
