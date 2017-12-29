import WebGLSketchPad from './WebGLSketchPad';

function main() {
  const sketch = new WebGLSketchPad();
  const stroke = sketch.stroke({
    size: 20.0,
    type: 0,
    color: [1,0,1,1],
  });
  console.log(stroke);
}

main();
