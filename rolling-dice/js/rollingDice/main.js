// Put your code here
console.log("Let's roll some dice, baby!")
console.log("---------------------------")

for (let i = 0; i < 10; i++)
{
     die1 = Roll();
     die2 = Roll();

    const message = `${die1} + ${die2} == ${die1.Value + die2.Value}`;
    if (die1.Value == die2.Value)
    {
        message += " DOUBLES!";
    }

    Console.log(message);
}

function getRandomRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const createDie = (value) => {
    return {
        value,
        toString: () => {
            const dieString = "Unknown"
            const dieStringArray= ["zero","one","two","three","four","five","six"]
            dieString = dieStringArray[this.value] 
            return dieString
        }
    }
}