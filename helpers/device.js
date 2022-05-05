async function deviceHash() {
  let nav = window.navigator;
  let vars = [
    // Consistent across Chrome/Mozilla
    nav.platform,
    nav.hardwareConcurrency,
    nav.language,
    nav.maxTouchPoints,
  ];

  // Unique to Chromium/Mozilla
  let devicesObject = [];

  let deviceResult = await nav.mediaDevices.enumerateDevices();
  devicesObject.push(deviceResult);
  let deviceIDs = devicesObject[0].map((a) => a.groupID);

  // Create finished array for hashing
  let finalVars = vars.concat(deviceIDs);

  // Do the hash
  let varsEncode = new TextEncoder().encode(finalVars);
  let varsHashBuffer = await crypto.subtle.digest("SHA-256", varsEncode);
  let varHashArray = Array.from(new Uint8Array(varsHashBuffer));
  let varHex = varHashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return varHex;
}
export { deviceHash };
