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

window.addEventListener("scroll",()=>{

  const scrollTop =
  document.documentElement.scrollTop;

  const height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  const progress =
  (scrollTop / height) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width =
  progress + "%";

});

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 400){

    topBtn.style.display = "block";

  }else{

    topBtn.style.display = "none";

  }

});

topBtn.onclick = ()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

};

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  glow.style.left =
  e.clientX + "px";

  glow.style.top =
  e.clientY + "px";

});

