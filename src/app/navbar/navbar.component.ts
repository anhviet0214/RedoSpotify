import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { cart } from '../core/data/data.component';
import { AppServiceService } from '../service/app-service.service';
import { GetAlbumService } from '../service/getAlbum.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  [x: string]: any;
  searchArtist$ = new Subject<string>();
  isSearch:boolean = false;
  isPlay:boolean = true;
  auth = 'https://accounts.spotify.com/authorize';
  clientID = '519056f08fce4cfb93a62f1129df9e89';
  redirectUri = 'http://localhost:4200/home';
  
  scopes  =  [
  
      "user-read-recently-played",
      "user-top-read",
      "user-read-playback-position",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "streaming",
      "playlist-modify-public",
      "playlist-modify-private",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private"

      ] ;
       params = new URLSearchParams({
        response_type: 'token',
        show_dialog: 'true',
        client_id:this.clientID ,
        redirect_uri:this.redirectUri ,
        scope:this.scopes.join(' ')
      })
  
      loginUri = `${this.auth}?${this.params.toString()}`
     
      
 
  data = [{
    id: 0
  }];
  
  constructor(
    private appService: AppServiceService,
  
  ) { }

  ngOnInit() {}
   
  handlePlaylistNew(id:any) {
    this.data.push({
      id: this.data.length,
    })

  }
  

}
