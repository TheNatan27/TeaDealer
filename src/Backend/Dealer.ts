const { CardModel } = require("./CardModel.ts");
const { TestPackModel } = require ("./TestPackModel.ts");
//import List from 'collections';

export class Dealer {
    private jobId: number;
    //private testDeck: List<CardModel>;
    private testPackModel: typeof TestPackModel; 
    private matchOver: boolean;

    constructor(jobID: number) {
        this.jobId = jobID;
    }

    public async startGame() {
        //choose testdeck from deck repo
        //...
        //forward testdeck in constructor
        const cardList = [];
        const cardModel1 = new CardModel("abc123", "./test1.spec.ts");
        const cardModel2 = new CardModel("def456", "./test2.spec.ts");
        const cardModel3 = new CardModel("ghj789", "./test3.spec.ts");
        cardList.push(cardModel1)
        cardList.push(cardModel2)
        cardList.push(cardModel3)
        this.testPackModel = new TestPackModel(cardList);        
    }

    public async forwardResultCard(testId: string){
        const resulo = await this.testPackModel.receiveTestResult(testId)
        console.log(resulo)
    }

    public async dealCard(){
        return await this.testPackModel.drawTestCard()
    }
    
}