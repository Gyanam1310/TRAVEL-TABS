let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

function removeActiveClass() {
    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");
}

function hideAllTabs() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");
}

function about() {
    hideAllTabs();
    aboutTab.classList.remove("d-none");

    removeActiveClass();
    aboutButton.classList.add("selected-button");
}

function timeToVisit() {
    hideAllTabs();
    timeToVisitTab.classList.remove("d-none");

    removeActiveClass();
    timeToVisitButton.classList.add("selected-button");
}

function attractions() {
    hideAllTabs();
    attractionsTab.classList.remove("d-none");

    removeActiveClass();
    attractionsButton.classList.add("selected-button");
}

// Show About tab by default
about();
