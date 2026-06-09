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