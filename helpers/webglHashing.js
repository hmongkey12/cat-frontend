const webglHash = () => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  gl.viewport(0, 0, canvas.width, canvas.height);

  const vSource = `
    attribute vec3 tripleThreat;
    void main(){
      gl_Position = vec4(tripleThreat, 1.0);
    }
  `;

  const fSource = `
    void main(){
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;

  const vShader = gl.createShader(gl.VERTEX_SHADER);
  const fShader = gl.createShader(gl.FRAGMENT_SHADER);

  gl.shaderSource(vShader, vSource);
  gl.shaderSource(fShader, fSource);

  gl.compileShader(vShader);
  gl.compileShader(fShader);

  const prog = gl.createProgram();

  gl.attachShader(prog, vShader);
  gl.attachShader(prog, fShader);

  gl.linkProgram(prog);

  gl.useProgram(prog);

  gl.clearColor(1, 0, 1, 1);

  gl.clear(gl.COLOR_BUFFER_BIT);

  const vBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);

  const vertexPositions = [-0.5, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(vertexPositions),
    gl.STATIC_DRAW
  );

  const vertexLocations = gl.getAttribLocation(prog, "tripleThreat");
  gl.vertexAttribPointer(vertexLocations, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vertexLocations);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  if (gl === null) {
    alert("Webgl not supported.  Time to get a new computer!!!");
    return;
  }

  document.body.appendChild(canvas);
};

export { webglHash };
