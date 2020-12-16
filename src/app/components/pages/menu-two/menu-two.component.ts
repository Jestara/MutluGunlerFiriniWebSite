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
  status: boolean;

  constructor(private service: MenuService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.status = true;
    this.service.getMenus().then((data) => {
      this.menus = data;
      this.status = false;
    });
  }

  getProducts(p){
    this.router.navigate(['/product', p.id]);
  }

  getMenuBackground(image) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  getCategoryBackground(image) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}
