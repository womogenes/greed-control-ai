import { Population } from './modules/Population.js';

let population;

window.setup = () => {
  pixelDensity(2.0);
  createCanvas(1280, 720);

  population = new Population(1000, 20);

  textFont('Inconsolata');
  frameRate(120);
};

window.draw = () => {
  background(250);

  // Play games for score
  population.play_games(10);

  // Draw stuff at the bottom

  for (let i = 0; i < Math.min(100, population.size); i++) {
    push();
    translate((i % 10) * 120 + 30, Math.floor(i / 10) * 110 + 10);
    population.players[i].display();
    pop();
  }

  textSize(24);
  textAlign('left', 'top');
  text(`Generation ${population.gen}`, 20, 20);

  // Mutate + reproduce
  population.do_generation();
};
