/* eslint-disable object-curly-newline */
/* eslint-disable quote-props */
class Maze {
  renderField(e) {
    this.test = e;
    let s = '';
    const x = e.split('');
    if (x[0] === '1') { s += 'border-bottom: 2px black solid;'; }
    if (x[1] === '1') { s += 'border-left: 2px black solid;'; }
    if (x[2] === '1') { s += 'border-top: 2px black solid;'; }
    if (x[3] === '1') { s += 'border-right: 2px black solid;'; }
    return s;
  }

  getMazeId(x) {
    this.test = x;
    const m = { 'a2': 0, 'f3': 0, 'b4': 1, 'e2': 1, 'd4': 2, 'f4': 2, 'a1': 3, 'a4': 3, 'd6': 4, 'e3': 4, 'c5': 5, 'e1': 5, 'b1': 6, 'b6': 6, 'c4': 7, 'd1': 7, 'a5': 8, 'c2': 8 };
    return m[x];
  }

  getMaze(i) {
    this.test = i;
    const mazes = [
      [
        ['0000', '1000', '0001', '0100', '1000', '1000'],
        ['0001', '0110', '1001', '1100', '1010', '0010'],
        ['0001', '1100', '0011', '0110', '1010', '0000'],
        ['0001', '1110', '1000', '1001', '1110', '0000'],
        ['0000', '1010', '0011', '0110', '1011', '0100'],
        ['0000', '0011', '0100', '0001', '0110', '0000'],
      ],
      [
        ['1000', '0000', '1001', '0100', '0000', '1000'],
        ['0010', '1001', '0110', '1001', '1100', '0010'],
        ['0001', '0110', '1001', '0110', '1010', '0000'],
        ['0000', '1001', '0110', '1001', '0111', '0100'],
        ['0001', '0111', '0101', '0110', '1001', '0100'],
        ['0001', '0100', '0001', '0100', '0010', '0000'],
      ],
      [
        ['0000', '1000', '0001', '0101', '0100', '0000'],
        ['1001', '0111', '0101', '1100', '1001', '0100'],
        ['0010', '0001', '0101', '0110', '0011', '0100'],
        ['0001', '0101', '0101', '0101', '0101', '0100'],
        ['0001', '1100', '1001', '0101', '0101', '0100'],
        ['0000', '0010', '0010', '0001', '0100', '0000'],
      ],
      [
        ['0000', '0001', '1100', '1000', '1000', '0000'],
        ['0001', '0101', '0110', '1010', '1010', '0000'],
        ['0001', '1100', '1001', '0110', '1011', '0100'],
        ['0001', '1110', '1010', '1000', '1010', '0000'],
        ['0000', '1010', '1010', '1010', '0011', '0100'],
        ['0000', '0010', '0011', '0110', '0001', '0100'],
      ],
      [
        ['1000', '1000', '1000', '1000', '0000', '0000'],
        ['0010', '1010', '1010', '0010', '1001', '1100'],
        ['0000', '0011', '1110', '1001', '0110', '0010'],
        ['0001', '1100', '1010', '0011', '1101', '0100'],
        ['0001', '0110', '1010', '1000', '1011', '0100'],
        ['0001', '0100', '0010', '0010', '0010', '0000'],
      ],
      [
        ['0001', '0100', '0001', '1100', '0000', '0000'],
        ['0001', '0101', '0101', '0110', '1001', '0100'],
        ['0000', '1001', '1101', '0101', '0110', '1000'],
        ['1000', '0011', '0110', '0001', '0101', '0110'],
        ['0010', '1001', '1101', '0101', '1100', '0000'],
        ['0000', '0010', '0010', '0001', '0110', '0000'],
      ],
      [
        ['0000', '1000', '1000', '0001', '0100', '0000'],
        ['0001', '0110', '1011', '1100', '1001', '0100'],
        ['1000', '1001', '0110', '1011', '0110', '1000'],
        ['0010', '0011', '0100', '1010', '1001', '0110'],
        ['0001', '1101', '1100', '1010', '0011', '0100'],
        ['0000', '0010', '0010', '0010', '0000', '0000'],
      ],
      [
        ['0001', '0100', '1000', '0001', '0100', '0000'],
        ['0000', '1000', '1011', '1100', '1001', '0100'],
        ['0001', '0110', '1010', '1010', '0011', '0100'],
        ['0001', '1100', '0011', '1110', '1000', '1000'],
        ['0001', '0111', '1100', '1010', '1010', '1010'],
        ['0000', '0000', '0010', '0010', '0010', '0010'],
      ],
      [
        ['0001', '0100', '1000', '1000', '0000', '0000'],
        ['0001', '0101', '0110', '1011', '0101', '0100'],
        ['0000', '1000', '1001', '0110', '1001', '0100'],
        ['0001', '0111', '0110', '1001', '1110', '0000'],
        ['0001', '0101', '0101', '0110', '0011', '1100'],
        ['0000', '0001', '0100', '0001', '0100', '0010'],
      ],
    ];
    return mazes[i];
  }

  coordToId(c) {
    this.test = c;
    const cols = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5 };
    const x = c.split('');
    return [cols[x[0].toUpperCase()], x[1] - 1];
  }
}

module.exports = Maze;
