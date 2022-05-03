const webglHash = () => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  if (gl === null) {
    alert("Webgl not supported.  Time to get a new computer!!!");
    return;
  }
  console.log("hi");
};

export { webglHash };
