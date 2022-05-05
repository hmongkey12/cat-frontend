const audioHash = () => {
  let hash = "";
  //instantiates an offline AudioContext allowing the sample to not be sent to the audio device
  const AudioContext =
    window.OfflineAudioContext || window.webkitOfflineAudioContext;
  const audioContext = new AudioContext(1, 5000, 44100);

  //creates a sample using an oscillator rather than a locally saved audio clip
  const oscillator = audioContext.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.frequency.value = 3000;

  //creates a compressor that levels out the signal
  const compressor = audioContext.createDynamicsCompressor();
  compressor.threshold.value = -40;
  compressor.knee.value = 40;
  compressor.ratio.value = 13;
  // compressor.reduction.value = 8;
  compressor.attack.value = 2;
  compressor.release.value = 0.5;

  oscillator.connect(compressor);
  compressor.connect(audioContext.destination);

  oscillator.start();

  audioContext.oncomplete = (event) => {
    //gets the sample data from channel
    const samples = event.renderedBuffer.getChannelData(0);

    //hashes the sample data
    hash = sha256(samples);
    // const hash = sha256(samples);
    // document.getElementById("fingerPrint").innerText = hash;
  };

  //starts the AudioContext and creates a sample that is then hashed
  audioContext.startRendering();
  return hash;
};

export { audioHash };
