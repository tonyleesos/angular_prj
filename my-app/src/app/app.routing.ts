import { NgModel } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";
import { NotFoundComponent } from "./notfound.component";
import { HomeComponent } from "./home.component";
import { getGitHubComponent } from "./getGitHub.component";
import { GitHubUserComponent } from "./githubuser.component";

export const routing = RouterModule.forRoot([
  {path:'',component:HomeComponent},
  {path:'getgithub',component:getGitHubComponent},
  {path:'getgithub/user/:login/:score',component:GitHubUserComponent},
  {path:'**',component:NotFoundComponent},
]);
