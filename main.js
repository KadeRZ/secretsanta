const readline = require('readline');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter all the names, seperate each name with a comma: ', (name) => {
    let allNames = new Array();
        allNames = name.split(",").map(item => item.trim());
    allNames.push(name)
        console.log(`these are the names:`, JSON.stringify(allNames, null, 2))
        rl.close();
});
// function to randomize allNames array

// function to take a name within the allNames array to another name within that array
