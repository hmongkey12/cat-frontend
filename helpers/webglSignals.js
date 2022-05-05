const webglSignals = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  const gl = canvas.getContext("webgl");
  if (gl === null) {
    alert("Webgl not supported.  Time to get a new computer!!!");
    return;
  }
  gl.clearColor(1, 0, 0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  document.body.appendChild(canvas);
};

export { webglSignals };
