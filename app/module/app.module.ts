import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from '../components/app.component';
import { KandidateComponent }   from '../components/kandidateComponent/kandidate.component';
import { HomeComponent }   from '../components/homeComponent/home.component';
import { VacaturesComponent }   from '../components/vacaturesComponent/vacatures.component';
import { NotFoundComponent }   from '../components/notFoundComponent/notFound.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: 'vacatures', component: VacaturesComponent},
    { path: 'kendidate', component: KandidateComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, KandidateComponent, NotFoundComponent, VacaturesComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
