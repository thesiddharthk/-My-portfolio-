function scrollToSection() {

  document.querySelector(".skills-section")
    .scrollIntoView({
      behavior: "smooth"
    });

}

function openEmail() {

  window.location.href =
    "mailto:siddharthishu06@gmail.com";

}

function openGithub() {

  window.open(
    "https://github.com/thesiddharthk",
    "_blank"
  );

}

function showSlack() {

  document.getElementById("slackText")
    .innerHTML =
    "Slack ID: U0B16L9UR99";

}

// Typing Animation

const words = [
  "Writer",
  "Philosopher",
  "Photographer",
  "Movie Analyst",
  "People Connector"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

  const currentWord = words[wordIndex];

  document.getElementById("typing").textContent =
    currentWord.substring(0, charIndex);

  charIndex++;

  if (charIndex > currentWord.length) {

    setTimeout(() => {

      charIndex = 0;
      wordIndex =
        (wordIndex + 1) % words.length;

    }, 1200);

  }

  setTimeout(typeEffect, 120);
}

typeEffect();

function toggleMenu(){

  const menu =
  document.getElementById("dropdown");

  if(menu.style.display === "block"){

    menu.style.display = "none";

  }else{

    menu.style.display = "block";

  }

}

window.addEventListener("scroll", () => {

  const reveals =
  document.querySelectorAll(".reveal");

  reveals.forEach(item => {

    const top =
    item.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      item.classList.add("active");

    }

  });

});
