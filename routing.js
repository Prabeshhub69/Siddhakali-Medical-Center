// List of allowed pages (to avoid loading wrong files)
const routes = ["home", "about", "services", "contact"];

// Load a specific page into #app
function loadPage(page) {
    fetch(`html/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
        });
}

// Route handler
function router() {
    let hash = location.hash.replace("#", "");

    if (!hash) {
        hash = "home"; // default page
    }

    // If route not in allowed list, redirect to home
    if (!routes.includes(hash)) {
        hash = "home";
    }

    loadPage(hash);
}

// Trigger when user changes URL hash
window.addEventListener("hashchange", router);

// Trigger on page load
window.addEventListener("load", router);

// Load CSS dynamically
function loadCSS(page) {
    // remove old page CSS
    const oldLink = document.getElementById("page-css");
    if (oldLink) oldLink.remove();

    // create new link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${page}.css`;
    link.id = "page-css";
    document.head.appendChild(link);
}

// Updated loadPage function
function loadPage(page) {
    // load CSS for this page
    loadCSS(page);

    // fetch HTML
    fetch(`html/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
        });
}

