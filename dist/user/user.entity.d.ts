import { postEntity } from '../posts/post.entity';
export declare class UserEntity {
    id: number;
    username: string;
    email: string;
    bio: string;
    image: string;
    password: string;
    hashPassword(): void;
    favorites: postEntity[];
    posts: postEntity[];
}
