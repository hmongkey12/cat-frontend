import { smashIt } from "./theSmash.js";

document.getElementById("vote1").addEventListener("click", async () => {
  const hash = smashIt();
  const backendURL = `https://epic-cat-battles-of-history.herokuapp.com/users?hash=${hash}&cat=CatInTheHat`;
  const postRes = await fetch(backendURL, {
    method: "POST",
  });
  const getRes = await fetch(backendURL, { method: "GET" });
  const getData = await getRes.json();
  document.getElementById("vote1display").textContent = getData[0].vote;
});

document.getElementById("vote2").addEventListener("click", async () => {
  const hash = smashIt();
  const backendURL = `https://epic-cat-battles-of-history.herokuapp.com/users?hash=${hash}&cat=Sylvester`;
  const postRes = await fetch(backendURL, {
    method: "POST",
  });
  const getRes = await fetch(backendURL, { method: "GET" });
  const getData = await getRes.json();
  document.getElementById("vote2display").textContent = getData[0].vote;
});
