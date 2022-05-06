import { webglHash } from "./webglHashing.js";
import { deviceHash } from "./device.js";
import { audioHash } from "./audio.js";
import { getCanvasHash } from "./canvas.js";
import { merklize } from "./merklize.js";

// function smashIt() {
//   const hash1 = webglHash();
//   const hash2 = deviceHash();
//   const hash3 = audioHash();
//   const hash4 = getCanvasHash();
//   const result = [hash1, hash2, hash3, hash4];
//   const finalResult = merklize(result);
//   return finalResult;
// }

// function smashIt() {
//   let result = "";
//   result += webglHash();
//   result += deviceHash();
//   result += audioHash();
//   result += getCanvasHash();
//   return sha256(result);
// }

function smashIt() {
  let result = "";
  let hash1 = webglHash();
  let hash2 = (async () => await deviceHash())();
  let hash3 = audioHash();
  let hash4 = getCanvasHash();
  result = hash1 + hash2 + hash3 + hash4;
  return sha256(result);
}

export { smashIt };
