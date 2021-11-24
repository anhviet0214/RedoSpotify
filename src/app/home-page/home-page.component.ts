import { GetAlbumUsService } from './../service/getAlbumUs.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from '../service/app-service.service';
import { GetAlbumService } from '../service/getAlbum.service';
import { GetAlbumUkService } from '../service/getAlbumUk.service';
import { GetAlbumDetailService } from '../service/getAlbumDetail.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dataPlaylistVn:any;
  dataPlaylistUs:any;
  dataPlaylistUk:any;
  dataplaylistDetail:any;
  constructor(
    private appService: AppServiceService,
    private router:  ActivatedRoute,
    private getAlbum: GetAlbumService,
    private getAlbumUs : GetAlbumUsService,
    private getAlbumUk : GetAlbumUkService,
    private getAlbumDetail:GetAlbumDetailService,
  ) { }

  myfunction(){
    this.router.fragment.subscribe((fragment) => {
      const token = new URLSearchParams(fragment!).get('access_token');
        sessionStorage.setItem('token',token!);
    })
  }
  ngOnInit() {
    this.myfunction();
    this.getAlbumVn();
    this.getAlbumUS();
    this.getAlbumUK();
    // console.log(this.router.snapshot.params)
  }

  getAlbumVn() {
    this.getAlbum.getAlbumVn().subscribe(playlist => {
      this.dataPlaylistVn =playlist.playlists.items;

      console.log(playlist)

    }) ;
  }
  getAlbumUS() {
    this.getAlbumUs.getAlbumUs().subscribe(playlist => {
      this.dataPlaylistUs =playlist.playlists.items;

    });
  }
  getAlbumUK() {
    this.getAlbumUk.getAlbumUk().subscribe(playlist => {
      this.dataPlaylistUk =playlist.playlists.items;
    })
  }
}
