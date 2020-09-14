/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable strict */

randomObject = {
    foo: "random1",
    bar: "random2",
    fum: "random3",
    quux: "random4",
    spam: "random5"
};

for (let i in randomObject) {
    console.log(`${i} ${randomObject[i]}`);
}


newObject = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(newObject.meals[3]);

let person1 = {
    name: "Nautilus",
    jobTitle: "Programmer",
    boss: "Golden Spiral"
};

let person2 = {
    name: "Fibonacci",
    jobTitle: "Data Scientist",
    boss: "Golden Spiral"
};

let person3 = {
    name: "Golden Spiral",
    jobTitle: "Program Manager"
};

let arrayPerson = [person1, person2, person3];

arrayPerson.forEach(function(person) {
    if (person.boss) {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    } else {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    }
});

decryptCipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

function decode(code) {
    
    if (code[0] in decryptCipher) {
        return code[decryptCipher[(code[0])] - 1];
    } else {
        return " ";
    }
}

let decodeChar = decode('cycle');

console.log(decodeChar);

function decodeWords(words) {
    let decodedMsg = "";
    let wordsArray = words.split(" ");
    for (let i of wordsArray) {
        decodedMsg += decode(i);
    }
    return decodedMsg;
}

let msg = decodeWords("cycle amen is amazing");
console.log(msg);

function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight(charObj) { 
            let selfDamage = 0;
            let oppDamage = 0;
            if (charObj.attack > this.defense) {
                selfDamage += charObj.attack - this.defense;
            } 
            if (this.attack > charObj.defense) {
                oppDamage += this.attack - charObj.defense;
            }
            return `Your opponent takes ${oppDamage} and you receive %{selfDamage} damage`

        }
    };

}

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6,);

let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 3, 2 );

let frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);

let aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);

let legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);

let characters = [gandalf, bilbo, frodo, aragorn, legolas];

let arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 20, 20);

characters.push(arwen);

let findAragorn = characters.find(function(character) {
    if (character.nickname === 'aragorn') {
        character.describe();
    }
});

let hobbits = characters.filter(function(character) {
    if (character.race === 'Hobbit') {
        return character;
    }
})

console.log(hobbits);

gandalf.weapon = 'wizard staff';
bilbo.weapon = 'Ring';
frodo.weapon = 'Bow and Arrow';
aragorn.weapon = 'Cosmic weapon';
legolas.weapon = 'Planetary weapon';
arwen.weapon = 'Multiverse weapon';



aragorn.describe();

console.log(aragorn.weapon);


const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

  function findOne(arr, query) {
      
      for (let i = 0; i < arr.length; i++) {
          let matchCount = 0;
          for (let prop in query) {
              if (arr[i].hasOwnProperty(prop)) {
              if (query[prop] === arr[i][prop]) {
                  matchCount++;
               }
             }
          }
          if (matchCount === Object.keys(query).length) {
              return arr[i];
          }
      }
      return null;
  }

console.log(findOne(HEROES, { id: 1 }));

const Database = {
    store: {
      heroes: [
        { id: 1, name: 'Captain America', squad: 'Avengers' },
        { id: 2, name: 'Iron Man', squad: 'Avengers' },
        { id: 3, name: 'Spiderman', squad: 'Avengers' },
        { id: 4, name: 'Superman', squad: 'Justice League' },
        { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
        { id: 6, name: 'Aquaman', squad: 'Justice League' },
        { id: 7, name: 'Hulk', squad: 'Avengers' },
      ]
    },

    findOne(query) {
        for (let i = 0; i < this.store.heroes.length; i++) {
            for (let prop in this.store.heroes[i]) {
                for (let anotherProp in query) {
                    if (this.store.heroes[i][prop] === query[anotherProp]) {
                      return this.store.heroes[i];
                    }
                }
            }
        }
        return null;
    }

    /*
    findOne(query) {
        return this.store.heroes.find(function(heroObj) {
            for (let i in query) {
                if (i in heroObj) {
                    return heroObj;
                }
            }
        })
        return null;
    }
    */
  };

 console.log(Database.findOne({id: 56}));


  