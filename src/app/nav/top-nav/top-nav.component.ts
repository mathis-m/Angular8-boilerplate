import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavItem} from '../interfaces';
import {Router} from '@angular/router';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
    selector: 'mm-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
    @Input() items: NavItem[] = [];
    @Input() title = 'Navigation';
    @Output() public sidenavToggle = new EventEmitter();

    public onToggleSidenav = () => this.sidenavToggle.emit();

    constructor(public router: Router, public responsiveService: ResponsiveService) {
    }

    ngOnInit() {
    }
}
