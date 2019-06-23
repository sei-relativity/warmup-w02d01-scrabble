//Suliman's solution

const scrabble = function (word) {

    let counter = 0;
    const lettersValues = {
        1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z'],
    };

    for (letter in word) {
        for (key in lettersValues) {
            if (lettersValues[key].indexOf(word[letter].toUpperCase()) !== -1) {
                counter += Number(key);
            }
        }
    }
    console.log(counter);
    return counter;
}


scrabble('cabbage');


//Azzam's Solution

const scrabble = function (word) {

    word = word.toLowerCase();
    const letters = {


        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10

    };

    let score = 0;

    word = word.split('');

    word.forEach(elem => {
        score += letters[elem];

    });


    console.log(score);

}