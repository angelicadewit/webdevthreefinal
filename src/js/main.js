

document.querySelector(".accordion").addEventListener("click", function(){
    const panel = document.querySelector(".panel")
    const span = document.querySelector(".showMore")
    if (panel.classList.contains("close")){
        panel.classList.add("open");
        panel.classList.remove("close");
        span.innerHTML = "&#8211;"
    } else {
        panel.classList.add("close");
        panel.classList.remove("add");
        span.innerHTML = "&#43;"
    }
})