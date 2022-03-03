import { choice } from './utils.js';

class Player {
  constructor(dist) {
    this.dist = dist;
    this.score = 0;
  }

  copy() {
    return new Player([...this.dist]);
  }

  choose() {
    return choice(this.dist);
  }

  display() {
    // Takes up a 200 x 100 area
    fill('#e38e27');
    noStroke();

    let n = this.dist.length - 1;
    let w = 200 / (n + 1); // width
    for (let i = 0; i <= n; i++) {
      let h = 100 * this.dist[i];
      rect(i * w, 100 - h, w, h);
    }

    fill(0);
    textSize(18);
    textAlign('right', 'bottom');
    text(`Score: ${this.score.toFixed(2)}`, 200, -10);
  }
}

export { Player };
