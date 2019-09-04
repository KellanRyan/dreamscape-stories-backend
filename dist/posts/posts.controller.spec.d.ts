import { CreatepostDto } from './dto/create-post.dto';
import { postsService } from './posts.service';
import { post } from './interfaces/post.interface';
export declare class postsController {
    private readonly postsService;
    constructor(postsService: postsService);
    create(createpostDto: CreatepostDto): Promise<void>;
    findAll(): Promise<post[]>;
}
