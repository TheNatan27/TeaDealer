const express = require('express');
import { response } from 'express';
import {Dealer} from '../Backend/Dealer';
import {GameTableLogic} from '../Backend/GameTableLogic';
//import testPackModel from '../../Backend/TestPackModel';


const webUI = express();
const dealerEndpoint = express();
const tableEndpoint = express();
const port = 552;
const port2 = 579;
const port3 = 583;
const dealer = new Dealer(4)
const table = new GameTableLogic()

webUI.get('/web/:jobID', async (request, response) => {
//    console.log('Log: web called, jobId: ' + request.params.jobId)
    dealer.startGame()
    response.send('web ' + request.params.jobID)
})
webUI.get('/download', async (request, response) => {
    
    response.download('./src/Endpoints/test01.spec.ts')
    console.log('File uploaded')
})
webUI.listen(port, () => {
    console.log('Log: web running at http://localhost:' + port);
})


dealerEndpoint.post('/deal/result/:testId', (request, response) => {
    console.log('Log: result received ' + request.params.testId);
    response.send('Result received');
    dealer.startGame()
    dealer.forwardResultCard(request.params.testId)
})
dealerEndpoint.get('/deal/draw/', async (request,response) => {
    dealer.startGame()    
    const responseJson = await dealer.dealCard();
    console.log(responseJson)
    response.send(responseJson)
})
dealerEndpoint.listen(port2, () => {
    console.log('Log: web running at http://localhost:' + port2);
})

tableEndpoint.post('/table/showdown/:gameId', (request, response) => {
    console.log('Log: result card received, game id: ' + request.params.testId);
    response.send('Result card received');
    table.receiveCard(request);
})