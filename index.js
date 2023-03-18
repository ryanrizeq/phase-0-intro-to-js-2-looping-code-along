const messages = [];

function writeCards(strings, event) {
    for (let i = 0; i < strings.length; i++) {
        messages[i] = `Thank you, ${strings[i]}, for the wonderful ${event} gift!`;
    }

    return messages;
}

function countDown(integer) {
    for (let i = integer; i >= 0; i--) {
        console.log(integer);
        integer--;
    }
}