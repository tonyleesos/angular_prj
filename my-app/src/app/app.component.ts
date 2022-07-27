import { Component } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';


@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <login></login>
  <!-- <img src="{{imageUrl}}"/> -->
  <user-form></user-form>
  <products></products>

  `
})

export class AppComponent {
  onClickMe($event:any){
    console.log("Clicked",$event);
  }
  title:string = 'My first Angular App';
  imageUrl = "https://picsum.photos/seed/picsum/200/300";
  isValid = true;

}
