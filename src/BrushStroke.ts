import { BrushStrokeConfig } from './types';
import Destination from './Destination';

class BrushStroke {
  strokesize: number;
  stroketype: number;
  color: Float32Array;
  locked = false;
  canvas: HTMLCanvasElement;
  destination: Destination;

  constructor(config: BrushStrokeConfig, canvas: HTMLCanvasElement, destination: Destination) {
    this.strokesize = config.size;
    this.stroketype = config.type;
    this.color = new Float32Array(config.color);
    this.canvas = canvas;
    this.destination = destination;
    this.init();
  }

  private init(): void {
    this.canvas.addEventListener('mousedown', this.canvasElementMouseDown);
  }

  private canvasElementMouseDown = (e: MouseEvent) => {
    document.addEventListener('mousemove', this.documentMouseMoveEvent);
  }

  private documentMouseMoveEvent = (e: MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    const rect = this.canvas.getBoundingClientRect();
    x = ((x - rect.left) - this.canvas.height / 2) / (this.canvas.height / 2);
    y = (this.canvas.width / 2 - (y - rect.top)) / (this.canvas.width / 2);
    const position = [x, y, 0.0];
    this.destination.update(position, this.color);
    document.addEventListener('mouseup', this.documentMouseUpEvent);
  }

  private documentMouseUpEvent = (e: MouseEvent) => {
    document.removeEventListener('mousemove', this.documentMouseMoveEvent);
  }
}

export default BrushStroke;
