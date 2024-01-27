export class Game {
  private matrix: (
    | {
        isBomb: boolean;
        hasBeenClicked: boolean;
        hasBeenFlagged: boolean;
      }
    | undefined
  )[][];

  private size: number = 24;

  private time: number;

  private elements: {
    mainBox: HTMLElement;
    bombs: HTMLElement;
    time: HTMLElement;
  };

  constructor(
    mainBoxEl: HTMLElement,
    bombsEl: HTMLElement,
    timeEl: HTMLElement
  ) {
    this.matrix = Array(this.size)
      .fill(undefined)
      .map(() => Array(this.size).fill(undefined));
    this.time = 1;

    this.elements = {
      mainBox: mainBoxEl,
      bombs: bombsEl,
      time: timeEl,
    };
  }

  start() {
    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        // TODO: Change this logic to include up to X bombs
        const shouldBeBomb = Math.random() >= 0.7;
        this.matrix[i][j] = {
          isBomb: shouldBeBomb,
          hasBeenClicked: false,
          hasBeenFlagged: false,
        };
      }
    }

    this.drawTable();
    this.drawTime();

    // console.table(this.matrix);
  }

  drawTime() {
    window.setInterval(() => {
      this.elements.time.innerHTML = this.time.toString();
      this.time += 1;
    }, 1000);
  }

  drawTable() {
    const boxSize = 25;

    for (let i = 0; i < this.size; i += 1) {
      for (let j = 0; j < this.size; j += 1) {
        const box = document.createElement('div');
        const isBomb = this.matrix[i][j]?.isBomb;

        box.style.position = 'absolute';
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.top = `${i * boxSize}px`;
        box.style.left = `${j * boxSize}px`;
        box.style.background = isBomb ? 'red' : 'gray';

        box.onclick = () => this.handleClick([i, j]);

        this.elements.mainBox.appendChild(box);
      }
    }
  }

  // position: [i,j]
  handleClick(position: [number, number]) {
    console.log(position);
  }
}
