import { DomSanitizer } from '@angular/platform-browser';
import { MutlutvService } from './../../../services/mutlutv/mutlutv.service';
import { MutluTV } from './../../../models/MutluTV';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutlutv',
  templateUrl: './mutlutv.component.html',
  styleUrls: ['./mutlutv.component.css']
})
export class MutlutvComponent implements OnInit {
  mutluTvs: MutluTV[];
  isLoading : boolean = false;
  constructor(private mutluTVService: MutlutvService,
    private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.getMutluTVs();
  }

  getMutluTVs(){
    this.isLoading = true;
    // console.log('MUTLUTV RESPONSE -->');
      this.mutluTVService.getMutluTVs().subscribe((response) => {
        this.mutluTvs = response.sort((a,b) =>  b.id  - a.id);
        // console.log(this.mutluTvs);
      }, error => {
        // console.log(error);
      } );
      this.isLoading = false;
  }

  changeVideoUrl(mutluTV: MutluTV){
    var split1 = mutluTV.videoUrl.split("embed",mutluTV.videoUrl.length)[1];
    var videoId = split1.split("/",split1.length)[1];
    // console.log('VIDEO ID -->', videoId);
    return videoId;
    // return this.sanitizer.bypassSecurityTrustResourceUrl(mutluTV.videoUrl);
   }

}
