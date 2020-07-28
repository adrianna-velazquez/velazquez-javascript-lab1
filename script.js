"use strict";
const name = "Adrianna Velazquez";
let age = 25;
const birthday = "August 7";
let detroitGC = true;
let lifeEvents = [
    "I went to Wayne State University.",
    "I was born in Dearborn, Michigan.",
    "I visited my grandparents in Mexico in February.",
    "I love cooking."
];

if(detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for (let i=0; i<lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

while(true) {
    let randomNumber = Math.floor(Math.random() *10 +1);
    if(randomNumber != 5) {
        counter ++;
        console.log(`${randomNumber} !== 5.`);
        counter ++;
    }
        else {
        counter ++;
        console.log(`5===5. It took ${counter} interations to randomly generate the number 5.`);
        break;
     }
    }

    // extended-challenge //

    let hours = 40;
    let wage = 10;

    if(hours <=40) {
        let paycheck = hours * wage;
        let weeks = 1000000 / paycheck;
        console.log(paycheck)
    } else {
        let overtime = (hours - 40) (wage * 1.5);
        let paycheck = 40 * wage + overtime;
        let weeks = 1000000 / paycheck;
        console.log(paycheck);
        console.log(`With wage = ${wage} and hours = ${hours} it would take ${weeks} weeks.`)
    }