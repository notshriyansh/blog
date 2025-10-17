let darkBtn = document.getElementById("darkModeBtn");
let body = document.body;

darkBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
});

let  increaseBtn = document.getElementById("increaseFont")
let decreaseBtn = document.getElementById("decreaseFont")

let progressBar = document.getElementById("progressBar");

let currentSize = 16;

increaseBtn.addEventListener("click", function(){
    currentSize += 2;
    body.style.fontSize = currentSize + "px";
});

decreaseBtn.addEventListener("click", function(){
    currentSize -= 2;
    body.style.fontSize = currentSize + "px";
} );

window.addEventListener("scroll", function(){
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    let progress = (window.srollY/totalHeight) *100;

    progressBar.style.width = progress + "%";
});
