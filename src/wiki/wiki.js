function colapsable(div) {
    content = div.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }