export function getContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
  let ctx;
  try {
    ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return (ctx as WebGLRenderingContext);
  } catch (e) {
    throw new Error(e.message);
  }
}

export function initialCanvasElement(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  return canvas;
}

export function resize(canvas: HTMLCanvasElement) {
  const displayWidth  = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
 
  if (canvas.width  != displayWidth ||
      canvas.height != displayHeight) {
 
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
  }
}

export function initShaders(gl: WebGLRenderingContext, vshader: string, fshader: string): WebGLProgram {
  const program = createProgram(gl, vshader, fshader);

  gl.useProgram(program);

  return program;
}

export function createProgram(gl: WebGLRenderingContext, vshader: string, fshader: string): WebGLProgram {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);

  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  return (program as WebGLProgram);
}

export function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);

  gl.compileShader(shader);

  return (shader as WebGLShader);
}
