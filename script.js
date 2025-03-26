function toggleBox(box) {
    box.classList.toggle("expanded");
}

function changeColor(event, btn, color) {
    event.stopPropagation();
    btn.closest(".box").style.backgroundColor = color;
}

function changeSize(event, btn, width, height) {
    event.stopPropagation();
    let box = btn.closest(".box");
    box.style.width = width;
    box.style.height = height;
    box.style.lineHeight = height;
}

function resetBox(event, btn) {
    event.stopPropagation();
    let box = btn.closest(".box");
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.lineHeight = "150px";
    box.style.backgroundColor = "white";
}
