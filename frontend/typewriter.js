let i = 0;
let j = 0;
let txt =
  "My rhymes are through the roof, They call me Dr. Suess, I'll walk over you like a mat, Sylvester the cat...More like Sylvester the simp, always chasing that tweety bird, stop being a nerd";

let txt2 =
  "  You're just a cat in a hat, And you look like Uncle Sam, you're lyrics are whack, and No, I don't want no green eggs and ham, Like LeBron, I have no equal, Unlike Space Jam, You won’t live to see a sequel, I'm a real rap hacker, And you're just a script kitty, They call me fifty, And I'm about to take you to the candy shop, I’ll make you <expletive>";
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("card1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//typerwriter for card 2
function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("card2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}
