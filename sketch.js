import { Population } from './modules/Population.js';

let population;

window.setup = () => {
  pixelDensity(2.0);
  createCanvas(1280, 720);

  population = new Population(100, 10);

  window.setInterval(() => {
    population.do_generation();
  }, 10);
};

window.draw = () => {
  background(240);

  // Do stuff

  // Draw stuff at the bottom
  textAlign('left', 'bottom');
  textSize(24);
  text('Top 5', 20, height - 160);
  for (let i = 0; i < 5; i++) {
    push();
    translate(i * 220 + 20, height - 120);
    population.players[i].display();
    pop();
  }
};
