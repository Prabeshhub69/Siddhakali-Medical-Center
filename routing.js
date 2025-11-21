// List of allowed pages (to avoid loading wrong files)
const routes = ["home", "about", "timeline", "services", "contact"];

// Load CSS dynamically
function loadCSS(page) {
    const oldLink = document.getElementById("page-css");
    if (oldLink) oldLink.remove();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${page}.css`;
    link.id = "page-css";
    document.head.appendChild(link);
}

// Load JS dynamically
function loadJS(page) {
    const oldScript = document.getElementById("page-js");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.src = `/js/${page}.js`;
    script.id = "page-js";
    document.body.appendChild(script);
}

// Load a specific page into #app
function loadPage(page) {
    // Load CSS
    loadCSS(page);

    // Fetch HTML
    fetch(`html/${page}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;

            // Load JS after HTML is inserted
            loadJS(page);
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
        });
}

// Router function
function router() {
    let hash = location.hash.replace("#", "");
    if (!hash) hash = "home"; // default page
    if (!routes.includes(hash)) hash = "home";

    loadPage(hash);
}

// Trigger router on hash change or page load
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
