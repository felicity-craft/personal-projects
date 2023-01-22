import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { IsaacBrownPhotographyComponent } from './components/isaac-brown-photography/isaac-brown-photography.component';
import { ModerationKitchenComponent } from './components/moderation-kitchen/moderation-kitchen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moderation-kitchen', component: ModerationKitchenComponent},
  { path: 'isaac-brown-photography', component:IsaacBrownPhotographyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
