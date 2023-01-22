import { CardModel } from "./CardModel";

export class TestPackModel {
    private cardSet: CardModel[];
    private matchOver: boolean;

    constructor(cardset: CardModel[]){
        this.cardSet = cardset;
        this.matchOver = false;
    }
    
    private checkIfAllCardsAreBack(){
        if(this.cardSet.length === 0){
            return true;
        } else return false;
    }
    private removeCardFromDeck(testId: string){
        for(let i = 0; i < this.cardSet.length; i++){
            if(this.cardSet[i].testId === testId){
                this.cardSet.splice(i,1);
                break;
            }
        }
    }

    public async receiveTestResult(testId: string){
        this.removeCardFromDeck(testId)
        return JSON.stringify(this.cardSet)
    }
    public async drawTestCard(){
        const card = this.cardSet[0];
        this.removeCardFromDeck(card.testId);
        return card;
    }
    public async isMatchOver(){
        return this.isMatchOver;
    }
}