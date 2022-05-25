import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
