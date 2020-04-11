import { NgModule } from '@angular/core';


import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuleWithProviders }  from '@angular/core';

export const routes: Routes= [

{ path: 'app', component: AppComponent },
{ path: 'hello', component: HelloComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
  })

  export class AppRoutingModule{}

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

