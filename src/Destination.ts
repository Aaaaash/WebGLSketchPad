import { initShaders } from './utils/initialUtils';

class Destination {
  positions: Array<number>;
  color: Float32Array;
  VSHADER_SOURCE: string;
  FSHADER_SOURCE: string;
  gl: WebGLRenderingContext;
  shaderProgram: WebGLProgram;

  constructor(gl: WebGLRenderingContext) {
    this.positions = [];
    this.color = new Float32Array([]);
    this.gl = gl;
    this.VSHADER_SOURCE = `
      attribute vec4 a_Position;
      attribute float a_PointSize;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = a_PointSize;
      }
    `;
    this.FSHADER_SOURCE = `
      precision mediump float;
      uniform vec4 u_FragColor;
      void main() {
        gl_FragColor = u_FragColor;
      }
    `;
    this.shaderProgram = initShaders(gl, this.VSHADER_SOURCE, this.FSHADER_SOURCE);
  }

  public update(position: Array<number>, color: Float32Array): void {
    this.positions = this.positions.concat(position);
    this.color = color;
    this.draw();
  }

  private draw(): void {
    const length = this.positions.length;
    this.gl.clearColor(0.0,0.0,0.0,1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    for (let i = 0; i < length; i += 3) {
      const arr = [this.positions[i], this.positions[i + 1], this.positions[i + 2]];
      const a_Position = this.gl.getAttribLocation(this.shaderProgram, 'a_Position');
      const a_PointSize = this.gl.getAttribLocation(this.shaderProgram, 'a_PointSize');
      const u_FragColor = this.gl.getUniformLocation(this.shaderProgram, 'u_FragColor');
  
      const gl_Position = new Float32Array(arr);
      const vertexPositionBuffer = this.gl.createBuffer();
      const FSIZE = gl_Position.BYTES_PER_ELEMENT;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexPositionBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, gl_Position, this.gl.STATIC_DRAW);
      this.gl.vertexAttribPointer(a_Position, 2, this.gl.FLOAT, false, FSIZE * 5, 0);
      this.gl.enableVertexAttribArray(a_Position);
      this.gl.vertexAttrib1f(a_PointSize, 5.0);
      this.gl.uniform4fv((u_FragColor as WebGLUniformLocation), this.color);
      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
  }
}

export default Destination;
