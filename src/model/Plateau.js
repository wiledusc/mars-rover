export default class Plateau {
  maxX;
  maxY;

  constructor(maxX, maxY) {

    if (isNaN(parseInt(maxX))) throw new Error("Plateau Max X is invalid");
    if (isNaN(parseInt(maxY))) throw new Error("Plateau Max Y is invalid");

    this.maxX = maxX;
    this.maxY = maxY;
  }
}