import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  image: string;
  text: string;
  likes: number;
  liked: boolean;
  user: User;
}
interface User {
  username: string;
  avatar: string;
  quote: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<Post[]>('./assets/data.json');
  }

  public onToggleLike(post: any): void {
    post.liked = !post.liked;
    post.liked ? post.likes++ : post.likes--;
  }

  public getAvatar(avatar: string): string {
    return `url(assets/images/avatars/${avatar})`;
  }

  public getPostImage(image: string): string {
    return `assets/images/posts/${image}`;
  }
}
