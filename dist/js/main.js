"use strict";

document.querySelector(".accordion").addEventListener("click", function () {
    var panel = document.querySelector(".panel");
    var span = document.querySelector(".showMore");
    if (panel.classList.contains("close")) {
        panel.classList.add("open");
        panel.classList.remove("close");
        span.innerHTML = "&#8211;";
    } else {
        panel.classList.add("close");
        panel.classList.remove("add");
        span.innerHTML = "&#43;";
    }
});
//# sourceMappingURL=main.js.map
