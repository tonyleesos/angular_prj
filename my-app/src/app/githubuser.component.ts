import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'user',
    template: `
      <h1>User Login:{{login}}</h1>
      <h2>User Score:{{score}}</h2>
    `,

  })
  
  export class GitHubUserComponent {
    login:any;
    score:any;

    constructor(private _route:ActivatedRoute){

    }


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this._route.params.subscribe(params => {
            this.login = params["login"];
            this.score = params["score"];
        })
      }

  }