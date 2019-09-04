import { postEntity } from './post.entity';
export declare class Comment {
    id: number;
    body: string;
    post: postEntity;
}
