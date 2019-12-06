import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/model/category.model';
import { CategoryService } from 'src/services/category.service';
import { MusicService } from 'src/services/music.service';
import { userId } from 'src/services/constants';
import { PlaylistService } from 'src/services/playlist.service';
import { Music } from 'src/model/music.model';

@Component({
    selector: 'app-edit-music-dialog',
    templateUrl: 'edit-music-dialog.html',
})
export class EditMusicComponent implements OnInit {

    categories: Category[] = [];

    selected = null;

    musicName = "";
    
    constructor(private musicService: MusicService, private categoryService: CategoryService, public dialogRef: MatDialogRef<EditMusicComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        console.log(this.data)
        this.categoryService.getAllCategories()
        .subscribe(res => {
            let ids = res.map(r => r.Id);
            this.musicName = this.data.music.Name;
            console.log(this.data)
            this.categories = res.filter((r,i) => ids.indexOf(r.Id) == i);
            this.selected = this.data.music.Id;
        })
    }

    editMusic() {
        this.musicService.editMusicInfo(+this.data.music.Id, this.selected, this.musicName)
        .subscribe(res => {
            alert("Alterado com sucesso!")
            this.onNoClick();
        })
    }
}
