import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input('isLoggedIn') isLogged: boolean;
    @Output() login = new EventEmitter<boolean>();
    
    constructor() { }
    
    ngOnInit() {
    }
    
    doLogin() {
        this.login.emit(!this.isLogged);
    }
    
}
