import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTrackListDetailService {

  
constructor(
  private http:HttpClient ,
) { }
getTracksListDetail(id:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  };
  return this.http.get(`https://api.spotify.com/v1/users/wizzler/playlists/${id}/tracks?offset=0&limit=20`, httpOptions);
  };
}
