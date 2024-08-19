import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddcarinfoComponent } from './addcarinfo/addcarinfo.component';
import { EditcarinfoComponent } from './editcarinfo/editcarinfo.component';

@NgModule({
  declarations: [						
    AppComponent,
      
      NavComponent,
      RegisterComponent,
      HomeComponent,
      AddcarinfoComponent,
      EditcarinfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
