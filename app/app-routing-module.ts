import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';
import { Mopile } from './contact/mopile/mopile';
import { Web } from './contact/web/web';
import { Login } from './login/login';
import { Register } from './register/register';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:"about" , component:About, title:'about'},
    {path:"login" , component:Login, title:'login'},
  {path:"register" , component:Register, title:'register'},
  {path:"home" , component:Home ,title:'home'},
  {path:"contact" , component:Contact ,title:'contact',
    children:[
      {path:'', redirectTo:'web' , pathMatch:'full'},
       {path:"web" , component:Web},
       {path:"mopile" , component:Mopile}, 
      {path:"**" , component:Notfound}
    ]
  },
  {path:"**" , component:Notfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
