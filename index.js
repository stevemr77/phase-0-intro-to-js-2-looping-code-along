const names = ["Lisa", "Kaitlin", "Jan"];
const typeOfEvent = 'surprise';

function writeCards(names, typeOfEvent){
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i ++) {
        thankYouMessages.push(`Thank you, ${[names[i]]}, for the wonderful ${typeOfEvent} gift!`);
    }
    return thankYouMessages;
}

console.log(writeCards(names, typeOfEvent));

let n = 10;
function countDown(n){
    while (n >= 0) {
        console.log(n--);
    }
}

countDown(5);
