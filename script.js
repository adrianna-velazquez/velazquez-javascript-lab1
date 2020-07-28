const name = "Adrianna Velazquez";
let age = 25;
const birthday = "August 7";
let detroitGC = true;
let lifeEvents = ["I went to Wayne State University.", "I was born in Dearborn, Michigan.", "My grandparents live in Mexico.", "I love cooking."]

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for (i=0; i<lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber; 

while(randomNumber !== 5) {
    randomNumber = Math.floor(Math.random() *11);
    if(randomNumber !== 5) {
        console.log(`${randomNumber} does not equal 5.`);
        counter ++;
    } else {
        counter ++;
        console.log(`${randomNumber} is equal to 5 and it took ${counter} interations to randomly generate the number 5.`);
    }
    }