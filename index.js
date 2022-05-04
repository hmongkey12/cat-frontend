import { webglHash } from "./helpers/webglHashing.js";
import { deviceHash } from "./helpers/device.js";
webglHash();

const deviceCode = await deviceHash();
console.log(deviceCode);
