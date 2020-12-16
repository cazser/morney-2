import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { MoneyComponent } from './views/money/money.component';
import { LabelComponent } from './views/label/label.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { FrameComponent } from './components/frame/frame.component';
import { MoneyIconComponent } from './components/money-icon/money-icon.component';
import { LabelIconComponent } from './components/label-icon/label-icon.component';
import { ChartIconComponent } from './components/chart-icon/chart-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    MoneyComponent,
    LabelComponent,
    StatisticsComponent,
    FrameComponent,
    MoneyIconComponent,
    LabelIconComponent,
    ChartIconComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"money", component:MoneyComponent},
      {path:"label", component:LabelComponent},
      {path:"statistics", component:StatisticsComponent},
      {path:"", redirectTo:"/money",  pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
