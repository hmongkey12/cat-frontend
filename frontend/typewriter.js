let i = 0;
let j = 0;

const txt1 = [
  "My rhymes are through the roof",
  "They call me Dr. Suess",
  "Making plays with thing 1 & thing 2",
  "Like what you gonna do",
  "Make you’re eye black and blue",
  "Or I'll leave it up to spike",
  "Because he likes to chew",
  "I'll walk over you like a mat",
  "Sylvester the cat...",
  "My bars are too cold",
  "It gets chilly under my hat",
  "More like Sylvester the simp",
  "always chasing the tweety bird",
  "stop being a nerd",
  "running around scurred",
  "like a scurdy cat",
  "This battles a wrap",
  "You can call me Mr. Grinch",
  "I am the meanest",
  "And you know I am a lyrical genius",
  "Like Lauren Hill, I got skill",
  "You might as well use Lorem Ipsum",
  "Cuz your muttering trash",
  'All I hear from you is "Sufferin Succotash"',
];

const txt2 = [
  "You're just a cat in a hat",
  "And you look like Uncle Sam",
  "you're lyrics are whack",
  "and No, I don't want no green eggs and ham",
  "Like LeBron, I have no equal",
  "Unlike Space Jam",
  "You won’t live to see a sequel",
  "Go home before you get deleted like spam",
  "I'm a real rap hacker",
  "And you're just a script kitty",
  "They call me fifty",
  "And I'm about to take you to the candy shop",
  "I’ll make you <expletive>",
];

let speed = 1000;

//typewriter for card 1
function typeWriter() {
  if (i < txt1.length) {
    const bar = document.createElement("p");
    bar.textContent = txt1[i];
    document.getElementById("card1").appendChild(bar);
    setTimeout(typeWriter, speed, i++);
  }
}

//typerwriter for card 2
function typeWriter2() {
  if (j < txt2.length) {
    const bar = document.createElement("p");
    bar.textContent = txt2[j];
    document.getElementById("card2").appendChild(bar);
    setTimeout(typeWriter2, speed, j++);
  }
}

//setting audioplayer default volume
let audio = document.getElementById("aud");
audio.volume = 0.1;
