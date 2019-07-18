import {Component} from '@angular/core';
import {NavItem} from './nav';

@Component({
    selector: 'mm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular8 Boilerplate';
    items: NavItem[] = [
        {
            name: 'Home',
            route: '/',
            matIcon: 'home'
        },
        {
            name: 'Sample',
            route: '/sample',
            matIcon: 'star'
        }
    ];

    constructor() {
        console.log('init');
    }
}
