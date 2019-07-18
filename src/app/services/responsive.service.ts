import {Injectable} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResponsiveService {

    private readonly mobileQuery = '(max-width: 959px)';
    private readonly desktopQuery = '(min-width: 960px)';

    public isMobileChange: Subject<boolean> = new Subject();
    public isMobile: boolean;

    public isDesktopChange: Subject<boolean> = new Subject();
    isDesktop: boolean;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.subscribeToViewChanges();
    }

    private subscribeToViewChanges() {
        this.breakpointObserver.observe([
            this.mobileQuery
        ]).subscribe(result => {
            if (result.matches) {
                this.mobile = true;
                this.desktop = false;
            }
        });
        this.breakpointObserver.observe([
            this.desktopQuery
        ]).subscribe(result => {
            if (result.matches) {
                this.desktop = true;
                this.mobile = false;
            }
        });
    }

    private set mobile(value: boolean) {
        console.log('mobile', value);
        if (this.isMobile !== value) {
            this.isMobile = value;
            this.isMobileChange.next(value);
        }
    }

    private set desktop(value) {
        console.log('desktop', value);

        if (this.isDesktop !== value) {
            this.isDesktop = value;
            this.isDesktopChange.next(value);
        }
    }
}
