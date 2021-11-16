// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const dieStringArray= ["zero","one","two","three","four","five","six"]
for (let i = 0; i < 10; i++)
{
     die1 = getRandomRoll(1,6);
     die2 = getRandomRoll(1,6);

    let message = `${dieStringArray[die1]} + ${dieStringArray[die2]} == ${die1 + die2}`;
    if (die1 == die2)
    {
        message += " DOUBLES!";
    }

    console.log(message);
}

function getRandomRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// const createDie = (value) => {
//     return {
//         value,
//         toString: () => {
//             const dieString = "Unknown"
//             const dieStringArray= ["zero","one","two","three","four","five","six"]
//             dieString = dieStringArray[this.value] 
//             return dieString
//         }
//     }
// }

