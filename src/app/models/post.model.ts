import { User } from './user.model';

export interface Post {
  id: number;
  image: string;
  text: string;
  likes: number;
  liked: boolean;
  user: User;
}
