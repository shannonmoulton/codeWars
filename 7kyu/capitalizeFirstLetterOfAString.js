String.prototype.capitalize = function () {
    let dict = {
        a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J',
        k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z'
    };

    return `${dict[this.toString()[0]] ? dict[this.toString()[0]] : this.toString()[0]}${this.toString().slice(1)}`
}

//https://www.codewars.com/kata/56c19316e8b139dff60006da