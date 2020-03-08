import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/header/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { TextComponent } from './layout/footer/text/text.component';

import { HttpClientModule } from "@angular/common/http";
import { UserCardComponent } from './layout/main/user-card/user-card.component';
import { UserCardLgComponent } from './layout/main/user-card-lg/user-card-lg.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    TextComponent,
    UserCardComponent,
    UserCardLgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
