"use strict";

function shellForAddEventListener(
  whichImageToHoverOver,
  imageToAdd,
  imageToRemove1,
  imageToRemove2
) {
  document
    .querySelector(whichImageToHoverOver)
    .addEventListener("mouseover", function () {
      document.getElementById("mainImage").classList.add(imageToAdd);
      document.getElementById("mainImage").classList.remove(imageToRemove1);
      document.getElementById("mainImage").classList.remove(imageToRemove2);
    });
}

shellForAddEventListener(
  ".image1",
  "permaHoverImage1",
  "permaHoverImage2",
  "permaHoverImage3"
);

shellForAddEventListener(
  ".image2",
  "permaHoverImage2",
  "permaHoverImage1",
  "permaHoverImage3"
);

shellForAddEventListener(
  ".image3",
  "permaHoverImage3",
  "permaHoverImage1",
  "permaHoverImage2"
);

