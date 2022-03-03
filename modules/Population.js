import { Player } from './Player.js';

class Population {
  constructor(size, max_n) {
    this.size = size;
    this.max_n = max_n;

    this.players = [];
    for (let i = 0; i < size; i++) {
      let dist = Array.from({ length: max_n + 1 }, () => Math.random());
      this.players.push(new Player(dist));
    }

    this.gen = 0;
  }

  play_games(rounds) {
    for (let i = 0; i < rounds; i++) {
      // Choose numbers
      let freqs = [];
      for (let j = 0; j <= this.max_n; j++) {
        freqs.push([]);
      }

      for (let j = 0; j < this.size; j++) {
        freqs[this.players[j].choose()].push(this.players[j]);
      }

      // Hand out scores
      for (let j = 0; j <= this.max_n; j++) {
        if (freqs[j].length === 0) continue;
        let points = j / freqs[j].length;
        for (let p of freqs[j]) {
          p.score += points;
        }
      }
    }
  }

  do_generation() {
    this.play_games(100);
  }
}

export { Population };
