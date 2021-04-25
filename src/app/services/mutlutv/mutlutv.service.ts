import { MutluTV } from './../../models/MutluTV';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutlutvService {
BASE_URL = 'https://service.mutlugunlerfirini.com.tr/api/';
// BASE_URL = 'http://localhost/MutluGunlerFirini.WebAPI/api/';
  constructor(private http: HttpClient) { }

  getMutluTVs(){
    return this.http.get<MutluTV[]>(this.BASE_URL + 'mutlutv/getall', {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa('celil@gmail.com' + ':' + '1980')
      }
    });


  }
}
