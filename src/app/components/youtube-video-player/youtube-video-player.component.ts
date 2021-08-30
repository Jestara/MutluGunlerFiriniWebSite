import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.css']
})
export class YoutubeVideoPlayerComponent implements OnInit {
  @Input() customVideoId: string;
  constructor() { }


  ngOnInit() {
    // console.log('VIDEO COMPONENT VIDEO ID -->',this.customVideoId);
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
