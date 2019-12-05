import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';   
import { MusicService } from 'src/services/music.service';
import { fileURL } from 'src/services/constants';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    
    msaapDisplayTitle = true;
    @Input('displayPlaylist') msaapDisplayPlayList: boolean;
    @Input('playlist') playlist: Track[];
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [];
    
    constructor(private musicService: MusicService) { }
    
    ngOnInit() {
        if(this.playlist == null) {
            this.musicService.getMusicById(6)
            .subscribe(res => {
                res.dir_music = res.dir_music.replace(/\~/g, "");
                let track = {
                    title: res.name,
                    link: fileURL+res.dir_music
                };
                this.msaapPlaylist.push(track);
                console.log(res, this.msaapDisplayPlayList);
            });
            this.musicService.getMusicById(7)
            .subscribe(res => {
                res.dir_music = res.dir_music.replace(/\~/g, "");
                let track = {
                    title: res.name,
                    link: fileURL+res.dir_music
                };
                this.msaapPlaylist.push(track);
                console.log(res, this.msaapDisplayPlayList);
            });
            this.musicService.getMusicById(8)
            .subscribe(res => {
                res.dir_music = res.dir_music.replace(/\~/g, "");
                let track = {
                    title: res.name,
                    link: fileURL+res.dir_music
                };
                this.msaapPlaylist.push(track);
                console.log(res, this.msaapDisplayPlayList);
            });
        }
    }
    
}
