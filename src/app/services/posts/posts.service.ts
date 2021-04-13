import { Posts } from './../../models/Posts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 // BASE_URL = 'https://service.mutlugunlerfirini.com.tr/api/';
  BASE_URL = 'http://localhost/MutluGunlerFirini.WebAPI/api/';
  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get<Posts[]>(this.BASE_URL + 'posts/getall', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa('celil@gmail.com' + ':' + '1980')
      }
    });
  }

}
