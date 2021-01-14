const puppeteer = require("./puppeteer");
const rabbitmq = require("./rabbitmq");


async function initApp(){
    try{
        await puppeteer.startPage();
        await rabbitmq.subscribeToRabbitmq();
    }catch(err){
        console.log('Error occured while connecting page or msgQ');
    }
}

(function(){
    initApp();
})();