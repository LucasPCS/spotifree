import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/model/category.model';
import { Music } from 'src/model/music.model';
import { Track } from 'ngx-audio-player';
import { fileURL } from 'src/services/constants';
import { EventEmitterService } from 'src/services/event-emitter.service';

@Component({
    selector: 'app-category-item',
    templateUrl: './category-item.component.html',
    styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

    category: Category;
    
    constructor(private categoryService: CategoryService, private route: ActivatedRoute, private eventEmitterService: EventEmitterService) { }
    
    ngOnInit() {
        this.categoryService.getCategoryById(+this.route.snapshot.paramMap.get("id"))
        .subscribe(res => {
            this.category = res;
        })
    }
    
    playMusic(music: Music) {
        let track: Track = new Track();
        track.link = fileURL+music.Dir_music.replace(/\~/g, "");
        track.title = music.Name;
        this.eventEmitterService.emitPlaylistChange([track])
    }
    
}
