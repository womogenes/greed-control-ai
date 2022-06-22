import { choice, mutate, normalize } from './utils.js';

class Player {
  constructor(distr, id) {
    this.distr = normalize(distr);
    this.score = 0;
    this.id = id;
  }

  copy() {
    return new Player([...this.distr], this.id);
  }

  copy_and_mutate() {
    return new Player(mutate(this.distr), this.id);
  }

  choose() {
    return choice(this.distr);
  }

  display() {
    let dimX = 100;
    let dimY = 100;

    fill('#10a6eb');
    noStroke();

    let n = this.distr.length - 1;
    let w = dimX / (n + 1); // width
    for (let i = 0; i <= n; i++) {
      let h = dimY * this.distr[i];
      rect(i * w - 1, dimY - h, w + 1, h);
    }

    fill(0);
    textSize(18);
    textAlign('right', 'top');
    text(`${this.score.toFixed(3)}`, dimX, dimY * 1.1);
    textAlign('left', 'top');
    text(this.id, 0, dimY * 1.1);
  }
}

export { Player };
