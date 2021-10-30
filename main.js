const { match } = require('assert');
const readline = require('readline');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
    const family1 = [
        'Ryan',
        'Nikki',
        'Kade',
        'Kolbe',
        'Daxton',
        'Ayvri'
    ];
    const family2 = [
        'Tyson',
        'Ashley Z',
        'Lily',
        'Jensen',
        'Nora'
    ];
    const family3 = [
        'Corey',
        'Jill',
        'Addy',
        'TJ',
        'Makenley',
        'Lexi',
        'Maycie'
    ];
    const family4 = [
        'Phil',
        'Ashley L',
        'Khyler',
        'Cooper'
    ];
    const family5 = [
        'Kaycie',
        'Akko',
        'Grayson',
        'Kyrie'
    ];

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
rl.question('Please enter all the names, seperate each name with a comma: ', (name) => {
    let allNames = new Array();
        allNames = name.split(",").map(item => item.trim());
        let gifters = allNames.slice(),
            giftGetters = allNames.slice();
            // shuffle(gifters)
            shuffle(giftGetters)
            console.log(gifters, giftGetters)
            console.log(`these are the names:`, JSON.stringify(allNames, null, 2))
    rl.close();
    // function to take a name within the allNames array to another name within that array
    // if(family1.includes(giftGetters)) {
    //     shuffle();
    // }
    // if(family2.includes(giftGetters)) {
    //     shuffle();
    // }
    // if(family3.includes(giftGetters)) {
    //     shuffle();
    // }
    // if(family4.includes(giftGetters)) {
    //     shuffle();
    // }
    // if(family5.includes(giftGetters)) {
    //     shuffle();
    // }
    while (gifters.length) {
        let giver = gifters.pop(),
        recievers = giftGetters[0] == giver ? giftGetters.pop() : giftGetters.shift();
        console.log(`${giver} is assigned to ${recievers}`)
    }
});

