import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Track } from 'ngx-audio-player';
import { Playlist } from 'src/model/playlist.model';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService {

    private emitChangeSource = new Subject<any>();

    changeEmitted$ = this.emitChangeSource.asObservable();
    
    constructor() { }

    emitPlaylistChange(change: Track[]) {
        this.emitChangeSource.next(change);
    }


}
