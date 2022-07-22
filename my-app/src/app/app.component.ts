import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <!-- <img src="{{imageUrl}}"/> -->
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
