import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';
import { GetAlbumDetailService } from '../service/getAlbumDetail.service';
import { GetTracksService } from '../service/getTracks.service';
import { GetTrackListDetailService } from '../service/getTrackListDetail.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  dataPlaylistDetail:any ;
  dataTracks:any;
  dataTracksDetails:any;
  constructor(
    private appService: AppServiceService,
    private activatedRoute:ActivatedRoute,
    private getAlbumDetail:GetAlbumDetailService,
    private getTracks: GetTracksService,
    private getTrackListDetail:GetTrackListDetailService,
  ) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(params => {
    if(params.get('id')){
      this.getDetail(params.get('id'));
      this.getTrackList(params.get('id'));
      this.getTrackListDetails(params.get('id'))
    }
  
     
     
   })
  }
  getDetail(id:any) {
  this.getAlbumDetail.getAlbumDetail(id).subscribe(playlist => {
    this.dataPlaylistDetail = playlist;
    console.log(this.dataPlaylistDetail)
  })
  }
  getTrackList(id:any) {
    this.getTracks.getTracks(id).subscribe(tracks => {
      this.dataTracks = tracks;
      console.log(this.dataTracks)
    })
  }
  getTrackListDetails(id:any) {
    this.getTrackListDetail.getTracksListDetail(id).subscribe((details: any) => {
      this.dataTracksDetails = details.items;
      console.log(this.dataTracksDetails,'a');
    })
  }
}
