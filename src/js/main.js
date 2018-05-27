

document.querySelector(".accordion").addEventListener("click", function(){
    const panel = document.querySelector(".panel")
    if (panel.classList.contains("close")){
        panel.classList.add("open");
        panel.classList.remove("close");
    } else {
        panel.classList.add("close");
        panel.classList.remove("add");
    }
})