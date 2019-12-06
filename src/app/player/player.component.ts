import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';   
import { MusicService } from 'src/services/music.service';
import { fileURL } from 'src/services/constants';
import { EventEmitterService } from 'src/services/event-emitter.service';
import { PlaylistService } from 'src/services/playlist.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    
    msaapDisplayTitle = true;
    @Input('displayPlaylist') msaapDisplayPlayList: boolean;
    msaapPageSizeOptions = [2,4,6];
    msaapDisplayVolumeControls = true;
    autoPlay = false;
    
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [];
    
    constructor(private musicService: MusicService, private eventEmitterService: EventEmitterService) {
        this.eventEmitterService.changeEmitted$.subscribe(value => {
            this.autoPlay = true;
            this.msaapPlaylist = value;
        })
    }
    
    ngOnInit() {
        this.musicService.getMusicById(6)
        .subscribe(res => {
            res.Dir_music = res.Dir_music.replace(/\~/g, "");
            let track = {
                title: res.Name,
                link: fileURL+res.Dir_music
            };
            this.msaapPlaylist.push(track);
        });
        this.musicService.getMusicById(7)
        .subscribe(res => {
            res.Dir_music = res.Dir_music.replace(/\~/g, "");
            let track = {
                title: res.Name,
                link: fileURL+res.Dir_music
            };
            this.msaapPlaylist.push(track);
        });
        this.musicService.getMusicById(8)
        .subscribe(res => {
            res.Dir_music = res.Dir_music.replace(/\~/g, "");
            let track = {
                title: res.Name,
                link: fileURL+res.Dir_music
            };
            this.msaapPlaylist.push(track);
        });
    }
    
}
