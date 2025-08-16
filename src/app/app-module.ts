import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './navbar/navbar.component';
import { About } from './about/about';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';
import { Web } from './contact/web/web';
import { Mopile } from './contact/mopile/mopile';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { Login } from './login/login';
import { Register } from './register/register';

@NgModule({
  declarations: [
    App,
   NavbarComponent,
   About,
   Home,
   Contact,
   Notfound,
   Web,
   Mopile,
   Parent,
   Child,
   Login,
   Register
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
