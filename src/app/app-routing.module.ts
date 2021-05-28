import { ResultsComponent } from './results/results.component';
import { EnglishtrackComponent } from './englishtrack/englishtrack.component';
import { HinditrackComponent } from './hinditrack/hinditrack.component';
import { ChinaComponent } from './china/china.component';
import { BrazilComponent } from './brazil/brazil.component';
import { IndiaComponent } from './india/india.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';

import { TrackComponent } from './track/track.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CountrieswiseComponent } from './countrieswise/countrieswise.component';
import { GermanyComponent } from './germany/germany.component';
import { SpainComponent } from './spain/spain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Dashboard1Component}  from './dashboard1/dashboard1.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';

import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
   {
     path:'',component:HomeComponent
   },
  {path :'signup',
   component:SignUpComponent
},
{
  path:'login',
  component:LogInComponent
},
{path:'logout', component:LogoutComponent},

  {path:'tracks', component:TrackComponent},
  {path:'favourite', component:FavouriteComponent},
  {path:'recommendation', component:RecommendationComponent},
  {path:'contrieswise', component:CountrieswiseComponent},
  {path:'profile',component:ProfileComponent},
  {path:'hindi', component:HinditrackComponent},
  {path:'english', component:EnglishtrackComponent},
  {path:'india', component:IndiaComponent},
  {path:'brazil', component:BrazilComponent},
  {path:'china', component:ChinaComponent},
  {path:'tracks', component:TrackComponent},
  {path:'germany', component:GermanyComponent},
  {path:'spain', component:SpainComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'dashboard1', component:Dashboard1Component},
  {path:'header', component:HeaderComponent},
  {path:'search',component:SearchComponent},
  {path:'results',component:ResultsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
