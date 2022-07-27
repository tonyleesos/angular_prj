import { Component } from "@angular/core";
import { user } from "./user";

@Component({
  selector:'user-form',
  templateUrl:'user-form.component.html',
})
export class UserFormComponent {
  submitted = false;
  model = new user('','','');
  countries = ['untied States','Singapore','Hong Kong','Australia'];
  onSubmit(){
    this.submitted = true;
  }
}
