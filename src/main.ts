import { Game } from './Game';

const main = () => {
  const mainBoxEl = document.getElementById('minesweeper');
  const bombsEl = document.getElementById('left-bombs');
  const timeEl = document.getElementById('time');

  if (!mainBoxEl || !bombsEl || !timeEl) return;

  const game = new Game(mainBoxEl, bombsEl, timeEl);
  game.start();
};

main();
