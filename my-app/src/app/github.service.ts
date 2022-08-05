import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface GitHubUser {
    items:{
      html_url: string;
      avatar_url:string;
      login:string;
      score:string;
    };

}

@Injectable()
export class GitHubService{
  constructor(private _http:HttpClient){

  }

  getGitHubData(_searchTerm:any): Observable<GitHubUser>{
    return this._http.get<GitHubUser>("https://api.github.com/search/users?q="+_searchTerm);
  }
}
