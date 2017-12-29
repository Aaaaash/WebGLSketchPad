import { getContext, initialCanvasElement, resize } from './utils/initialUtils';
import BrushStroke from './BrushStroke';
import { BrushStrokeConfig } from './types';

class Main {
  constructor() {
    this.init();
  }

  ctx: WebGLRenderingContext;

  init(): void {
    let canvas = document.querySelector('#canvas');
    if (canvas === null) {
      canvas = initialCanvasElement();
    }
    resize((canvas as HTMLCanvasElement));
    this.ctx = getContext((canvas as HTMLCanvasElement));
    console.log('WebGLRenderingContext is loading finished!');
  }

  stroke(config: BrushStrokeConfig) {
    return new BrushStroke(config);
  }
}

export default Main;
