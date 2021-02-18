import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallery } from 'src/app/models/Gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  BASE_URL = 'https://service.mutlugunlerfirini.com.tr/api/';
  constructor(private http: HttpClient) { }


  public getGallery() {
    const headers = new HttpHeaders({
        Authorization: 'Basic ' + btoa('celil@gmail.com' + ':' + '1980'),
        Accept: 'application/json'
    });
    return this.http.get<Gallery[]>(this.BASE_URL + 'galleries/getall', {headers}).toPromise();
}
}
