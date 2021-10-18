import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models';
import { ImageService, PostService } from '../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private imageService: ImageService
  ) {
    this.posts$ = this.postService.fetchPosts();
  }

  public onToggleLike(post: any): void {
    post.liked = this.postService.toggleLike(post.liked);
    post.likes = this.postService.calculateLikes(post.liked, post.likes);
  }

  public getAvatar(avatar: string): string {
    return this.imageService.avatar(avatar);
  }

  public getPostImage(posImage: string): string {
    return this.imageService.postImage(posImage);
  }
}
