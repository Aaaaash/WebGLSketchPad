import { DragRectConfig } from './types';
import Destination from './Destination';

class DragRect {
  canvas: HTMLCanvasElement;
  destination: Destination;
  color: Float32Array;

  constructor(config: DragRectConfig, canvas: HTMLCanvasElement, destination: Destination) {
    this.color = new Float32Array(config.color);
    this.canvas = canvas;
    this.destination = destination;
    this.init();
  }

  init() {
    
  }
}

export default DragRect;
