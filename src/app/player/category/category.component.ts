import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/model/category.model';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    categories: Category[];

    displayedColumns: string[] = ['Name', 'Musics'];
    
    constructor(private categoryService: CategoryService) { }
    
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            let ids = res.map(r => r.Id);
            this.categories = res.filter((r,i) => ids.indexOf(r.Id) == i);
        })
    }
    
}
