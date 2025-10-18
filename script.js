const darkBtn = document.getElementById("darkModeBtn");
const body = document.body;

darkBtn.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else{
        localStorage.setItem("theme", "light");
    }
});

if(localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

const increaseBtn = document.getElementById("increaseFont");
const decreaseBtn = document.getElementById("decreaseFont");
let currentSize = 16;

increaseBtn.addEventListener("click", function() {
    currentSize += 2;
    body.style.fontSize = currentSize + "px";
});

decreaseBtn.addEventListener("click", function() {
    currentSize -= 2;
    body.style.fontSize = currentSize + "px";
});


const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", function() {
    let totalHeight = document.scrollHeight - this.window.innerHeight;
    let progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + "%";
});

const addBlogBtn = document.getElementById("addBlogBtn");
const blogList = document.getElementById("blogList");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function showBlogs() {
    blogList.innerHTML = "";
    blogs.forEach((blog, index) => {
        const blogDiv = document.createElement("div");
        blogDiv.innerHTML = `
        <h4>${blog.title}</h4>
        <p>${blog.content}</p>

        <button class="deleteBtn" onClick = "deleteBlog(${index})">Delete</button>
        `;
        blogList.appendChild(blogDiv);
    });
}

addBlogBtn.addEventListener("click", function() {
    const title = document.getElementById("blogTitle").value.trim();
    const content = document.getElementById("blogContent").value.trim();

    if(title === "" || content === "") {
        alert("Please enter both title and content :(");
        return;
    }
    blogs.push({title, content});
    localStorage.setItem("blogs", JSON.stringify(blogs));

    showBlogs();

    document.getElementById("blogTitle").value = "";
    document.getElementById("blogContent").value = "";
});

function deleteBlog(index) {
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    showBlogs();
}

showBlogs();