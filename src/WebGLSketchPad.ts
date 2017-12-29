import { getContext, initialCanvasElement, resize } from './utils/initialUtils';
import BrushStroke from './BrushStroke';
import Destination from './Destination';
import { BrushStrokeConfig } from './types';

class WebGLSketchPad {
  canvas: HTMLCanvasElement | null;
  ctx: WebGLRenderingContext;
  destination: Destination;

  constructor() {
    this.init();
  }

  init(): void {
    this.canvas = document.querySelector('#canvas');
    if (this.canvas === null) {
      this.canvas = initialCanvasElement();
    }
    resize((this.canvas as HTMLCanvasElement));
    this.ctx = getContext((this.canvas as HTMLCanvasElement));
    this.ctx.clearColor(0.0,0.0,0.0,1.0);
    this.ctx.clear(this.ctx.COLOR_BUFFER_BIT);
    this.destination = new Destination(this.ctx);
    console.log('WebGLRenderingContext is loading finished!');
  }

  stroke(config: BrushStrokeConfig) {
    return new BrushStroke(config, (this.canvas as HTMLCanvasElement), this.destination);
  }
}

export default WebGLSketchPad;
