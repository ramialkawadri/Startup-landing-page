"use strict";

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
