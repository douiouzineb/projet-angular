import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: '' , component : LoginComponent},

{path: 'inscription' , component : InscriptionComponent},
{path: 'home' , component : HomeComponent},
{path: 'article/:Bearer' , component : ArticleComponent},
{path: 'acueill/:Bearer' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
