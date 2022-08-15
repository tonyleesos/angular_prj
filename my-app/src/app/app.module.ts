import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { getGitHubComponent } from './getGitHub.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubUserComponent } from "./githubuser.component";

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { RatingComponent } from './rating.component';

import { TruncatePipe } from './truncate.pipe';

import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,getGitHubComponent,ProductsComponent,RatingComponent,ProductComponent,
    TruncatePipe,UserFormComponent,LoginComponent,HomeComponent,NotFoundComponent,GitHubUserComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,routing
  ],
  providers: [ProductService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
