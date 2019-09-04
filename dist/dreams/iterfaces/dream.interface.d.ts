import { Document } from 'mongoose';
export interface dream extends Document {
    readonly id: number;
    readonly user: string;
    readonly content: string;
}
