import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { RatingComponent } from './rating.component';

import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,ProductsComponent,RatingComponent,ProductComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
