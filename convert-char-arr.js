//Task 1 Decode the following revesed messages
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let decode1 = message1.split('').reverse().join('');
let decode2 = message2.split('').reverse().join('');
let decode3 = message3.split('').reverse().join('');
let decode4 = message4.split('').reverse().join('');

console.log(decode1);
console.log(decode2);
console.log(decode3);
console.log(decode4);
//Task 2 Write my own reverse messages.
let myMessage1 = "I'm building confidence in my coding skills, and I enjoy the journey!";
let myMessage2 = "The lessons and practice allow me to learn and simultaneously to make sure I'm applying the material so I know it is correct.";
let myMessage3 = "I'm excited to see what else I can learn from this course!";

let encode1 = myMessage1.split('').reverse().join('');
let encode2 = myMessage2.split('').reverse().join('');
let encode3 = myMessage3.split('').reverse().join('');

console.log(encode1);
console.log(encode2);
console.log(encode3);