import WebGLSketchPad from './WebGLSketchPad';

function main() {
  const sketch = new WebGLSketchPad();
  const stroke = sketch.stroke({
    size: 2,
    type: 0,
  });
  console.log(stroke);
}

main();
