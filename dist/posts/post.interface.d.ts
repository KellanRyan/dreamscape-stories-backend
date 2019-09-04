import { postEntity } from './post.entity';
interface Comment {
    body: string;
}
export interface CommentsRO {
    comments: Comment[];
}
export interface postRO {
    post: postEntity;
}
export interface postsRO {
    posts: postEntity[];
    postsCount: number;
}
export {};
