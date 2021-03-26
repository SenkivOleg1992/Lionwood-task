import { IArticle } from '../interfaces/article.interface';
import { ITopic } from '../interfaces/topics.interface';

export class Article implements IArticle {
  constructor(
    public id: number,
    public topic: ITopic,
    public titleName: string,
    public details: string,
    public moreDetails: string,
    public image?: string
  ) {}
}
