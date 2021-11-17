// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const getAllSpells = () => {
    return [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyReqired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyReqired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyReqired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyReqired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyReqired: 2921.5
        }
    ]
};


const displaySpellBook=(book) =>{
    console.log(book.title);
    for (aSpell of book.spells)
    {
        console.log(`${aSpell.name}`);
    }
}

const allSpells = getAllSpells();

makeEvilSpellBook=(allSpells) => {
   let evilBook={}
    evilBook.title = "Evil Book";
    evilBook.spells = allSpells.filter(spell = spell.isEvil)

    return evilBook;

}



makeGoodSpellBook=(allSpells) => {
    let goodBook={}
    goodBook.title = "Good Book";
    goodBook.spells = allSpells.filter(spell =! spell.isEvil)

    return goodBook;
}

displaySpellBook(makeGoodSpellBook());
console.log(" ")
displaySpellBook(evilBook);