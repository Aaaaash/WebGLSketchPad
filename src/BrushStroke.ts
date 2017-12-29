import { BrushStrokeConfig } from './types';

class BrushStroke {
  strokesize: number;
  stroketype: number;

  constructor(config: BrushStrokeConfig) {
    this.strokesize = config.size;
    this.stroketype = config.type;
    this.initialStrokeElement();
  }

  initialStrokeElement() {
    /**
     * TODO: add a new element;
     */
  }
}

export default BrushStroke;
