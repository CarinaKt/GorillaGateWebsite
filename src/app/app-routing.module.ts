import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SpaceappsComponent} from "./pages/spaceapps/spaceapps.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {SupportusComponent} from "./pages/supportus/supportus.component";
import {ImpressumComponent} from "./pages/impressum/impressum.component";
import {DatenschutzComponent} from "./pages/datenschutz/datenschutz.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
    {path: '',   redirectTo: '/spaceapps', pathMatch: 'full' },
    {path: 'spaceapps', component: SpaceappsComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'supportus', component: SupportusComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'datenschutz', component: DatenschutzComponent},
    {path: 'contact', component: ContactComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
