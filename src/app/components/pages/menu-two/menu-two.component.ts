import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {Router} from "@angular/router";
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.css']
})
export class MenuTwoComponent implements OnInit {
  category: any;
  menus: any;
  product: any;
  image: any;

  constructor(private service: MenuService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.service.getMenus().then((data) => {
      this.menus = data;
    });
  }

  getProducts(p){
    this.service.getCategory(p.id).then((data) => {
      this.category = data;
    })
  }

  getBackground(image) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}
