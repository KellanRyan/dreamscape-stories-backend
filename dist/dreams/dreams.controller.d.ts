import { CreateDreamDto } from './dto/create-dream.dto';
import { DreamsService } from './dreams.service';
import { Dream } from './interfaces/dream.interface';
export declare class DreamsController {
    private readonly dreamsService;
    constructor(dreamsService: DreamsService);
    create(createDreamDto: CreateDreamDto): Promise<Dream>;
    findAll(): Promise<Dream[]>;
    deletedream(res: any, dreamID: any): Promise<any>;
}
