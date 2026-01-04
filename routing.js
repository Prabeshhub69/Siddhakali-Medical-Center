// List of allowed pages
const routes = ["home", "about", "timeline", "services", "contact", "machine", "bio", "gallery"];

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
            const app = document.getElementById("app");
            app.innerHTML = html;

            // ✅ RESET SCROLL TO TOP
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" // or "smooth" if you prefer
            });

            // Load JS after HTML is inserted
            loadJS(page);
        })
        .catch(() => {
            document.getElementById("app").innerHTML = "<h2>Page not found</h2>";
        });
}


// Router function
function router() {
    // Check if we are on home.html directly, then skip routing
    if (window.location.pathname.endsWith("home.html")) {
        return; // do nothing
    }

    let hash = location.hash.replace("#", "");
    if (!hash) hash = "home"; // default page
    if (!routes.includes(hash)) hash = "home";

    loadPage(hash);
    highlightActiveLink(hash);
}

function highlightActiveLink(page) {
    const links = document.querySelectorAll(".nav a");

    links.forEach(link => {
        const href = link.getAttribute("href").replace("#", "");

        if (href === page) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Trigger router on hash change or page load
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

