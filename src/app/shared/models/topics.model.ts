import { ITopic } from "../interfaces/topics.interface";

export class Topic implements ITopic{
    constructor(
        public id: number,
        public topicName: string
    ){}
}