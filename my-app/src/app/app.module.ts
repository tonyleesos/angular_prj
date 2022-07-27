import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,ProductsComponent,RatingComponent,ProductComponent,
    TruncatePipe,UserFormComponent,LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ProductService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
