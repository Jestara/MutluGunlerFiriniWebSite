import { GalleryService } from './../../../services/gallery/gallery.service';
import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryLayout, NgxGalleryOptions, NgxGalleryOrder} from 'ngx-gallery-9';
import { Gallery } from 'src/app/models/Gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    images: Gallery[];
    totalRecords: number;
    page = 1;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: any = [];
    status: boolean;
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getGalleryPhotos();
  }


  getGalleryPhotos(){
    this.status = true;
    this.galleryService.getGallery().then((data) => {
      this.images = data;
      this.totalRecords = data.length;
      for (const i in this.images) {
          const obj = {
              small: 'https://' + this.images[i].imageUrl,
              medium: 'https://' + this.images[i].imageUrl,
              big: 'https://' + this.images[i].imageUrl
          };
          this.galleryImages.push(obj);
      }
      this.status = false;

  });

  this.galleryOptions = [
      {

          width: '100%',
          height: '100%',
          thumbnailsColumns: 6,
          imageAnimation: NgxGalleryAnimation.Fade,
          previewDescription: false,
          imageSize:NgxGalleryImageSize.Contain,
          thumbnailsSwipe: true,

      },
      // max-width 800
      {




          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {

           width: '100%',
           height: '100%',
          // breakpoint: 400,
          thumbnailsColumns: 3 ,
          thumbnailsRows: 3,
          thumbnailsPercent:500,
          imageSize:NgxGalleryImageSize.Contain,
          thumbnailsSwipe: true,
          imagePercent:1000,
          image:false

      }
  ];
  }

}
