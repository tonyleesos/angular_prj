import { Component } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { GitHubService } from './github.service';


@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" routerLink="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="getgithub">GitHub</a>
          </li>          
        </ul>
      </div>
    </div>
  </nav>


  <router-outlet></router-outlet>
  <!--
  <h1>{{title}}</h1>
  <login></login>
  <img src="{{imageUrl}}"/> 
  <user-form></user-form>
  <products></products>
  <input class="form-control" type="search" [formControl]="searchControl">
  -->
  `,
})

export class AppComponent {

  searchControl = new FormControl();
  constructor(){
    this.searchControl.valueChanges.pipe(filter(text=>text.length >= 3),debounceTime(400),distinctUntilChanged()).subscribe(
      value => {
        console.log(value)
      }
    );
  }

  onClickMe($event:any){
    console.log("Clicked",$event);
  }
  title:string = 'My first Angular App';
  imageUrl = "https://picsum.photos/seed/picsum/200/300";
  isValid = true;

}
