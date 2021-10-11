class Battleship {
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    getIntFromLetter(l) {
        return this.alphabet.indexOf(l);
    }
    //  t = 1 for digit, n = number of digit/letter, r = ALWAYS 1, s = string to check
    getFromSerial(t, n, r, s) {
        const m = (t == 1) ? s.match(/(\D+)?\d/) : s.match(/[a-zA-Z]{1}/);
        console.log(m);
        const i = m ? m[0].length - 1 : -1;
        if (r == n) {
            return s.split('')[i]
        }
        return this.getFromSerial(t, n, r+1, s.slice(i+1));
    }
}

module.exports = Battleship;