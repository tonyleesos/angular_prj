import { NgModel } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";
import { NotFoundComponent } from "./notfound.component";
import { HomeComponent } from "./home.component";
import { getGitHubComponent } from "./getGitHub.component";

export const routing = RouterModule.forRoot([
  {path:'',component:HomeComponent},
  {path:'github',component:getGitHubComponent},
  {path:'**',component:NotFoundComponent},
]);
