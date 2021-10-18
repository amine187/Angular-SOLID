import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly IMAGES_URI = 'assets/images/';

  public avatar(imageName: string): string {
    return `url(${this.IMAGES_URI}avatars/${imageName})`;
  }

  public postImage(imageName: string): string {
    return `${this.IMAGES_URI}posts/${imageName}`;
  }
}
