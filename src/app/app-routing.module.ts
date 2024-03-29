import { MutlutvComponent } from './components/pages/mutlutv/mutlutv.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogFullComponent } from './components/pages/blog-full/blog-full.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogMasonaryComponent } from './components/pages/blog-masonary/blog-masonary.component';
import { BlogSingleComponent } from './components/pages/blog-single/blog-single.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MenuOneComponent } from './components/pages/menu-one/menu-one.component';
import { MenuTwoComponent } from './components/pages/menu-two/menu-two.component';
import { MenuItemOneComponent } from './components/pages/menu-item-one/menu-item-one.component';
import { MenuItemTwoComponent } from './components/pages/menu-item-two/menu-item-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import {ProductComponent} from "./components/pages/product/product.component";


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home-v2',component:HomeTwoComponent
  },
  {
    path:'home-v3',component:HomeThreeComponent
  },
  {
    path:'home-v4',component:HomeFourComponent
  },
  {
    path:'hakkimizda',component:AboutUsComponent
  },
  {
    path:'mor-ekmek',component:BlogFullComponent
  },
  {
    path:'blog-grid',component:BlogGridComponent
  },
  {
    path:'blog-list',component:BlogListComponent
  },
  {
    path:'blog-masonary',component:BlogMasonaryComponent
  },
  {
    path:'blog-single',component:BlogSingleComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'iletisim',component:ContactComponent
  },
  {
    path:'legal',component:LegalComponent
  },
  {
    path:'locations',component:LocationsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'menu-v1',component:MenuOneComponent
  },
  {
    path:'urunlerimiz',component:MenuTwoComponent
  },
  {
    path:'menu-item-v1',component:MenuItemOneComponent
  },
  {
    path:'menu-item-v2',component:MenuItemTwoComponent
  },
  {
    path:'galeri',component:GalleryComponent
  },
  {
    path:'mutlutv',component:MutlutvComponent
  },
  {
    path:'product/:id',component:ProductComponent
  },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
