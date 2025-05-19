const synth = window.speechSynthesis;

function speak() {
  let textElement = document.getElementById("text");
  let text = document.getElementById("inputText").value || "test";
  let rate = document.getElementById("readingSpeed").value || 5;

  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;

    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    speech.rate = rate;
    speech.pitch = 0.1;
    speech.volume = 1;
    speech.lang = "en-US";
    synth.speak(speech);

    speech.addEventListener("boundary", ({ charIndex, charLength }) => {
      const word = text.slice(charIndex, charIndex + charLength);
      textElement.innerHTML = word;
    });
  }
}

function pause() {
  synth.pause();
}

function resume() {
  synth.resume();
}
