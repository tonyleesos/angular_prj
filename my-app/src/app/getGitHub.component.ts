import { Component } from '@angular/core';
import { GitHubService } from './github.service';
import { FormControl } from '@angular/forms';
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: '<getGitHub>',
  template: `
    <input class="form-control" type="search" [formControl]="searchControl">
    <h3>GitHub User Results</h3>
    <div *ngIf="isLoading">
      <i class="fa-solid fa-spinner fa-3x"></i>
    </div>

    <div class="d-flex align-items-center mt-4" *ngFor="let user of users">
      <a [routerLink]="['user',user.login,user.score]" class="flex-shrink-0">
          <img class="mr-3" src="{{ user.avatar_url }}" alt="" width="64" height="64">
      </a>
      <div class="flex-grow-1 ms-3">
          <h4>{{user.login}}</h4>
          Score:{{ user.score }}
      </div>
    </div>

  `,
  providers:[GitHubService]
})

export class getGitHubComponent {
  isLoading = false;
  users:any;
  searchControl = new FormControl();
  constructor(private _gitHubService:GitHubService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.searchControl.valueChanges
      .pipe(filter(text=>text.length >= 3), debounceTime(400),distinctUntilChanged())
      .subscribe(value =>{
        this.isLoading = true;
        this._gitHubService.getGitHubData(value)
        .subscribe(
          data => {
            this.isLoading = false;
            console.log(data.items)
            this.users = data.items;
        });
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.

  // }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.

  // }

}
