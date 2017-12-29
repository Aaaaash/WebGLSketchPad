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
