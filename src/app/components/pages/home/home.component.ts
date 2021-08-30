import { DomSanitizer } from '@angular/platform-browser';
import { Posts } from './../../../models/Posts';
import { PostsService } from './../../../services/posts/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Posts[];
  constructor(private postsService: PostsService,
    private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
   // console.log('POSTS RESPONSE --> ');
      this.postsService.getPosts().subscribe((response) =>{
        this.posts = response.sort((a,b) =>  b.id  - a.id);
        console.log(this.posts);
      }, error => {
        console.log(error);
      } );
  }

  changeVideoUrl(post: Posts){
    return this.sanitizer.bypassSecurityTrustResourceUrl(post.videoUrl);

   }

}
