import { Model } from 'mongoose';
import { Dream } from './interfaces/dream.interface';
import { CreateDreamDto } from './dto/create-dream.dto';
export declare class DreamsService {
    private readonly dreamModel;
    constructor(dreamModel: Model<Dream>);
    create(createDreamDto: CreateDreamDto): Promise<Dream>;
    findAll(): Promise<Dream[]>;
    deletedream(dreamID: any): Promise<any>;
}
