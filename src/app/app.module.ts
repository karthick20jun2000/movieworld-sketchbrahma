import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
 
  ]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MovieListComponent,
    LoaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
