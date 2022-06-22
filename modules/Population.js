import { Player } from './Player.js';

class Population {
  constructor(size, max_n) {
    console.assert(size % 2 == 0);

    this.size = size;
    this.max_n = max_n;

    this.players = [];
    for (let i = 0; i < size; i++) {
      let dist = Array.from({ length: max_n + 1 }, () => Math.random());
      this.players.push(new Player(dist, i));
    }

    this.gen = 0;
  }

  play_games(rounds) {
    for (let p of this.players) {
      p.score = 0;
    }

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

    for (let p of this.players) {
      p.score *= this.size / rounds;
    }

    this.players.sort((a, b) => b.score - a.score);
  }

  do_generation() {
    let toKill = Math.round(this.size * 0.5);

    let newPlayers = [];
    for (let i = 0; i < this.size - toKill; i++) {
      newPlayers[i] = this.players[i].copy_and_mutate();
    }
    for (let i = 0; i < toKill; i++) {
      newPlayers[i + (this.size - toKill)] = this.players[i].copy_and_mutate();
    }
    this.players = newPlayers;

    this.gen++;
  }
}

export { Population };
