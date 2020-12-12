import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../services/menu.service";

@Component({
  selector: 'app-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.css']
})
export class MenuTwoComponent implements OnInit {
  category: any;

  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.service.getProducts().then((data) => {
      this.category = data;
      console.log(this.category);
    })
  }

}
