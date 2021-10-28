const readline = require('readline');
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
rl.question('Please enter all the names, seperate each name with a comma: ', (name) => {
    let allNames = new Array();
        allNames = name.split(",").map(item => item.trim());
    allNames.push(name)
    shuffle(allNames)
    console.log(`these are the names:`, JSON.stringify(allNames, null, 2))
    assign(allNames)
    rl.close();
});
// function to take a name within the allNames array to another name within that array
function assign(allNames) {
    let rand_index = Math.floor(Math.random() * allNames.length);
    let rand_val = allNames[rand_index];
    nameOne = allNames[0];
    nameTwo = rand_val;
    if(nameOne === nameTwo) {
        nameTwo++;
    }
    console.log(`${allNames[0]} is assigned to ${rand_val}`)
}