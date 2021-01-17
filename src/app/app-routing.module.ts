import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
    {path: '', redirectTo: '/home-page', pathMatch: 'full'},
    {path: 'home-page', component: HomePageComponent},
    {path: 'test-form-page', component: FormPageComponent},
    {path: 'interpretation', component: InterpretationComponent},
    {path: '**', component: PageNotFoundComponent },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

