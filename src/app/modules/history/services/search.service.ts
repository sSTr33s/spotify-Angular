import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URI=environment.api

  constructor(private HttpClient:HttpClient) { }

  getMusicFilter$(filter:string):Observable<any> {
    return this.HttpClient.get(`${this.URI}/tracks`)
  }
}
