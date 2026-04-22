// Animate the box from left to right
let box = document.getElementById("animateBox");
let pos = 0;

function moveBox() {
    if (pos >= 300) {
        pos = 0; // Reset position
    } else {
        pos += 2;
        box.style.left = pos + "px";
    }
    requestAnimationFrame(moveBox);
}

moveBox();