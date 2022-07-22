import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruncatePipe } from './truncate.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
      TruncatePipe
   ]
})
export class AppRoutingModule { }
