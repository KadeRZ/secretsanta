const { match } = require('assert');
const args = require('minimist')(process.argv.slice(2))
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// function to randomize allNames array
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array
}
const families = {
    
}
const recursiveAsyncReadLine = function () {
    rl.question('Please enter a new family: ', function (names) {
        if (names == 'done') {
            let gifters = Object.keys(families),
            giftGetters = Object.keys(families);
            shuffle(giftGetters)
            while (gifters.length) {
                let giver = gifters.pop()
                let receiver = giftGetters[0] == giver ? giftGetters.pop() : giftGetters.shift();
                // check if receiver is in the givers family
                if(family1.includes(receiver)) {
                    // console.log(`${family1}, ${giver} includes ${receiver}`)
                    // shuffle();
                }
                console.log(`${giver} is assigned to ${receiver}`)
            }
            return rl.close(); //closing RL and returning from function.
        }
        let allNames = names.split(',').map(s => s.trim());
        allNames.forEach(function callbackFn(giver){ 
            families[giver] = allNames;
        })
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};
  recursiveAsyncReadLine();
  
