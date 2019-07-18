import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavItem} from '../interfaces';

@Component({
    selector: 'mm-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Input() items: NavItem[] = [];
    @Output() sidenavClose = new EventEmitter();

    public onSidenavClose = () => this.sidenavClose.emit();

    constructor() {
    }

    ngOnInit() {
    }

}
