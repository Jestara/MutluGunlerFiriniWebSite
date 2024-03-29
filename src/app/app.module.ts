import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HeaderTwoComponent } from './components/layouts/header-two/header-two.component';
import { HeaderThreeComponent } from './components/layouts/header-three/header-three.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FooterTwoComponent } from './components/layouts/footer-two/footer-two.component';
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
import { MenuItemOneComponent } from './components/pages/menu-item-one/menu-item-one.component';
import { MenuItemTwoComponent } from './components/pages/menu-item-two/menu-item-two.component';
import { MenuOneComponent } from './components/pages/menu-one/menu-one.component';
import { MenuTwoComponent } from './components/pages/menu-two/menu-two.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HeaderFourComponent } from './components/layouts/header-four/header-four.component';
import { HeaderInnerComponent } from './components/layouts/header-inner/header-inner.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MenuService} from "./services/menu/menu.service";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./components/modules/material/material.module";
import { ProductComponent } from './components/pages/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxGalleryModule} from 'ngx-gallery-9';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MutlutvComponent } from './components/pages/mutlutv/mutlutv.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { YoutubeVideoPlayerComponent } from './components/youtube-video-player/youtube-video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTwoComponent,
    HeaderThreeComponent,
    BlogSidebarComponent,
    PreloaderComponent,
    FooterComponent,
    FooterTwoComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    AboutUsComponent,
    BlogFullComponent,
    BlogGridComponent,
    BlogListComponent,
    BlogMasonaryComponent,
    BlogSingleComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    LegalComponent,
    LocationsComponent,
    LoginComponent,
    RegisterComponent,
    MenuItemOneComponent,
    MenuItemTwoComponent,
    MenuOneComponent,
    MenuTwoComponent,
    ErrorComponent,
    HeaderFourComponent,
    HeaderInnerComponent,
    ProductComponent,
    GalleryComponent,
    MutlutvComponent,
    YoutubeVideoPlayerComponent,

  ],
  imports: [
    YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxGalleryModule,
    MatGridListModule,
    MatExpansionModule,
    NgxQRCodeModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
