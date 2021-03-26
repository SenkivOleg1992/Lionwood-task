import { ITopic } from "./topics.interface";

export interface IArticle {
    id: number;
    topic: ITopic;
    titleName: string;
    details: string;
    moreDetails: string;
    image?: string;
}