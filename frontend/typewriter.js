let i = 0;
let j = 0;

const txt1 = [
  "My rhymes are through the roof",
  "They call me Dr. Suess",
  "Making plays with thing 1 and 2",
  "Like whatcha gonna do",
  "Make your eye black N' blue",
  "Or leave it up to spike",
  "Because he likes to chew",
  "Walk over you like a mat",
  "Your not Sylvester the cat",
  "Your Sylvester the simp",
  "Always chasing the tweety bird",
  "Stop being a nerd",
  "Running around scurred",
  "Like a scurdy cat",
  "Sorry if my bars are cold",
  "It gets chilly under the hat",
  "Call me Mr. Grinch",
  "I'm the meanest",
  "You know I am a lyrical genius",
  "Like Lauren Hill, I got skill",
  "Like Lorem Ipsum, your just muttering trash",
  'All I hear from you is "Sufferin Succotash"',
];

const txt2 = [
  "You're just a cat in a hat",
  "And you look like Uncle Sam",
  "Your lyrics are whack",
  "And nobody likes green eggs and ham",
  "Like LeBron, I have no equal",
  "Unlike Space Jam",
  "You won’t live to see a sequel",
  "Go home before you get deleted like spam",
  "I'm a real rap hacker",
  "And you're just a script kitty",
  "They call me fifty",
  "I'm about to take you to the candy shop",
  "Make you clean my litter box",
  "Oops, I made a dookie",
  "You better clean it up before I get Looney",
  "No more toilet paper, but I got your books",
  "Teach you how to phish",
  "No need for hooks",
  "One fish, two fish, red fish, blue fish",
  "I don't know what color a fish is",
  'And I don\'t care what a "Sneetch" is',
  "But I know what a snitch is",
  "And I know where the beach is",
  "So Come N' get your stiches",
  "Time to go swimming with the fishes",
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
