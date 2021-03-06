import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { MoneyComponent } from './views/money/money.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { FrameComponent } from './components/frame/frame.component';
import { MoneyIconComponent } from './components/money-icon/money-icon.component';
import { LabelIconComponent } from './components/label-icon/label-icon.component';
import { ChartIconComponent } from './components/chart-icon/chart-icon.component';
import { MoneyTagsComponent } from './components/money-tags/money-tags.component';
import { MoneyNoteComponent } from './components/money-note/money-note.component';
import { MoneyTypeComponent } from './components/money-type/money-type.component';
import { MoneyNumberpadComponent } from './components/money-numberpad/money-numberpad.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    MoneyComponent,
    StatisticsComponent,
    FrameComponent,
    MoneyIconComponent,
    LabelIconComponent,
    ChartIconComponent,
    MoneyTagsComponent,
    MoneyNoteComponent,
    MoneyTypeComponent,
    MoneyNumberpadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"money", component:MoneyComponent},
      {path:"statistics", component:StatisticsComponent},
      {path:"", redirectTo:"/money",  pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
