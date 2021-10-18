import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly DATA_JSON = './assets/data.json';

  constructor(private http: HttpClient) {}

  public fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.DATA_JSON);
  }

  public toggleLike(isLiked: boolean): boolean {
    return !isLiked;
  }

  public calculateLikes(isLiked: boolean, likes: number): number {
    return isLiked ? likes + 1 : likes - 1;
  }
}
