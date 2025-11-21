// Load page based on query parameter
const params = new URLSearchParams(window.location.search);
const page = params.get('page') || "home"; // default: home

const contentDiv = document.getElementById("content");

// Load and inject HTML file
fetch(`${page}.html`)
    .then(response => response.text())
    .then(data => {
        contentDiv.innerHTML = data;
    })
    .catch(() => {
        contentDiv.innerHTML = "<h2>Page not found</h2>";
    });
