import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../services/menu/menu.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category: any;
  isLoading: boolean = false;
  section?: string;
  selectedCategoryProducts: any;
  selectedCategoryId: number = 0;

  constructor(private service: MenuService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.changeLoadingState();
    this.route.paramMap.subscribe((data) => {
      const id = data.get('id');
      this.service.getCategory(id).then((data) => {

        this.category = data;
        this.selectedCategoryProducts = this.category[0].products;
        this.selectedCategoryId = this.category[0].id;

      })

    });
    this.changeLoadingState();
  }

  getMenuBackground(image) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  goTo(c){
    this.section = c.toString();
    document.getElementById(this.section).scrollIntoView({behavior:"smooth"});
  }
  selectCategory(category: any){
    this.selectedCategoryProducts = category.products;
    this.selectedCategoryId = category.id;

  }

  changeLoadingState(){
    this.isLoading = !this.isLoading;
  }


}
