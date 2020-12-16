import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category: any;
  status: boolean;
  section: string;

  constructor(private service: MenuService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.status = true;
    this.route.paramMap.subscribe((data) => {
      const id = data.get('id');
      this.service.getCategory(id).then((data) => {
        this.category = data;
        this.status = false;
      })
    });
  }

  getMenuBackground(image) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  goTo(c){
    this.section = c.toString();
    console.log(this.section)
    document.getElementById(this.section).scrollIntoView({behavior:"smooth"});
  }


}
