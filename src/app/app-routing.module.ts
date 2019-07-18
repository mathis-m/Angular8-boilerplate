import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent, SampleComponent} from './views';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sample',
        component: SampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
