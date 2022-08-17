import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainpageComponent} from "./pages/mainpage/mainpage.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {SupportusComponent} from "./pages/supportus/supportus.component";
import {ImpressumComponent} from "./pages/impressum/impressum.component";
import {DatenschutzComponent} from "./pages/datenschutz/datenschutz.component";

const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'supportus', component: SupportusComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'datenschutz', component: DatenschutzComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
