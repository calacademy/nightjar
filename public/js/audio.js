
var context;
var bufferLoader;
var audioBufferList;
var audioAmbient;
var gainNode;

window.onload = init;

function init() {
	
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      '/sounds/tap.m4a',
      '/sounds/ambient.wav',
      '/sounds/hit.m4a',
      '/sounds/miss.m4a',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  
	audioBufferList = bufferList;

  var audioTap = context.createBufferSource();
  audioTap.buffer = bufferList[0];
	audioTap.connect(context.destination);

	var audioAmbient = context.createBufferSource();
  audioAmbient.buffer = bufferList[1];
	audioAmbient.connect(context.destination);

	var audioHit = context.createBufferSource();
  audioHit.buffer = bufferList[2];
	audioHit.connect(context.destination);

	var audioMiss = context.createBufferSource();
  audioMiss.buffer = bufferList[3];
	audioMiss.connect(context.destination);

}

function playAudioTap() {
	var audioTap = context.createBufferSource();
  audioTap.buffer = audioBufferList[0];
	audioTap.connect(context.destination);
	audioTap.start(0);
}

function playAudioHit() {
	var audioHit = context.createBufferSource();
  audioHit.buffer = audioBufferList[2];
	audioHit.connect(context.destination);
	audioHit.start(0);
}

function playAudioMiss() {
	var audioMiss = context.createBufferSource();
  audioMiss.buffer = audioBufferList[3];
	audioMiss.connect(context.destination);
	audioMiss.start(0);
}

function playAudioAmbient() {
	audioAmbient = context.createBufferSource();
	gainNode = context.createGain();
  audioAmbient.buffer = audioBufferList[1];
  audioAmbient.loop = true;
  audioAmbient.connect(gainNode);
  gainNode.connect(context.destination);
	gainNode.gain.value = 0.3;
	audioAmbient.start(0);
}

function stopAudioAmbient() {
  //audioAmbient.disconnect();
  if (gainNode) {
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioAmbient.context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioAmbient.context.currentTime + 3.5);
  }
}
