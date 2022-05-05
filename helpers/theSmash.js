import { webglHash } from "./webglHashing.js";
import { deviceHash } from "./device.js";
import { audioHash } from "./audio.js";
import { getCanvasHash } from "./canvas.js";

function smashIt() {
  let result = "";
  result += webglHash();
  result += deviceHash();
  result += audioHash();
  result += getCanvasHash();
  return sha256(result);
}

export { smashIt };
