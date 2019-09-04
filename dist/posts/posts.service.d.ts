import { Model } from 'mongoose';
import { post } from './interfaces/post.interface';
import { CreatepostDto } from './dto/create-post.dto';
export declare class postsService {
    private readonly postModel;
    constructor(postModel: Model<post>);
    create(createpostDto: CreatepostDto): Promise<post>;
    findAll(): Promise<post[]>;
    delete(id: number): Promise<post>;
}
