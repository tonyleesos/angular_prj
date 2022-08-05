import { Component } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { GitHubService } from './github.service';


@Component({
  selector: 'app-root',
  template: `
  <getGitHub></getGitHub>
  <h1>{{title}}</h1>
  <login></login>
  <!-- <img src="{{imageUrl}}"/> -->
  <user-form></user-form>
  <products></products>
  <input class="form-control" type="search" [formControl]="searchControl">
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
