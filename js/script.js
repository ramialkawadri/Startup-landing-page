"use strict";

// Scrolling behavior
const mainNavlEl = document.querySelector(".main-nav");
const buttonUpEl = document.querySelector(".top-button");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    mainNavlEl.style.backgroundColor = "inherit";
    buttonUpEl.classList.remove("hidden");
  } else {
    mainNavlEl.style.backgroundColor = "transparent";
    buttonUpEl.classList.add("hidden");
  }
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Video player
const videoPlayer = document.querySelector(".video-player");
const videoPlayButton = document.querySelector(".video-start-icon");
const videoCloseButton = document.querySelector(".video-exit-button");

const closeVideoPlayer = () => {
  videoPlayer.classList.add("hidden");
};

videoPlayButton.addEventListener("click", () => {
  videoPlayer.classList.remove("hidden");
});

videoCloseButton.addEventListener("click", closeVideoPlayer);

document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !videoPlayer.classList.contains("hidden"))
    closeVideoPlayer();
});

// Toggle butotns
document.querySelectorAll(".toggle-button").forEach((current) => {
  current.addEventListener("click", () => {
    current.classList.toggle("switch-side");
  });
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
    }
  });
});
