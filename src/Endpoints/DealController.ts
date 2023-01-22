const express = require('express');
import { CardModel } from '../Backend/CardModel';
import {TestPackModel} from '../Backend/TestPackModel';

export class DealController {
    private jobId: number;
    private testPackModel: TestPackModel;
    private dealerEndpoint = express();
    private port = 579;
    private clickCounter: number;
    private finished: boolean;     

    constructor(jobID: number) {
        this.jobId = jobID;
        const cardList = [];
        const cardModel = new CardModel();
        cardList.push(cardModel)
        this.testPackModel = new TestPackModel(cardList);
        this.clickCounter = 0;
        this.finished = false;
    }
    
    public async starListening() : Promise<boolean> {

        await this.testPackModel.startReceivingCards(this.jobId);
        return this.finished;
    }

    async listenToCards(request, response, next){
        console.log('listened to ' + request.params.jobID);
        //
        next();
    }
    private checker(){
        this.clickCounter += 1;
        console.log(this.clickCounter)
        if(this.clickCounter === 3){
            this.finished = true;
        } else this.finished = false;
    }

}
      
