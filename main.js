function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks !== null) {
        navLinks.classList.toggle("active");
    }
}
function bookAppointment() {
    window.location.href = "/booking-page"; // replace with actual URL
}
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll('.standard-card');
    var observer = new IntersectionObserver(function (entries, observerInstance) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                target.classList.add('visible');
                observerInstance.unobserve(target); // Stop observing after fade-in
            }
        });
    }, {
        threshold: 0.1,
    });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var blocks = document.querySelectorAll('.section-block');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
    });
    blocks.forEach(function (block) { return observer.observe(block); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries, observerInstance) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                target.classList.add("visible");
                observerInstance.unobserve(target);
            }
        });
    }, {
        threshold: 0.1,
    });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-advisory-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-qsm-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { return observer.observe(card); });
});
document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".academic-team-card");
    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { return observer.observe(card); });
});
function toggleService(headerElement) {
    var clickedCard = headerElement.closest('.academic-service-card');
    if (!clickedCard)
        return;
    // Close all other cards
    var allCards = document.querySelectorAll('.academic-service-card');
    allCards.forEach(function (card) {
        if (card !== clickedCard) {
            card.classList.remove('open');
        }
    });
    // Toggle the clicked one
    clickedCard.classList.toggle('open');
}
var navItems = [
    { name: "Home", href: "index.html" },
    { name: "Mission & Vision", href: "mission.html" },
    { name: "Gold Standard", href: "gold.html" },
    { name: "Services", href: "services.html" },
    { name: "Advisory Board", href: "advisory.html" },
    { name: "Demos", href: "demos.html" },
    { name: "Our Team", href: "team.html" },
    { name: "Contact", href: "contact.html" },
    { name: "About", href: "about.html" },
    { name: "Join Us!", href: "join.html" },
];
var searchInput = document.getElementById("search");
var searchResults = document.getElementById("search-results");
var activeIndex = -1;
function renderResults(query) {
    searchResults.innerHTML = "";
    activeIndex = -1;
    var matches = navItems.filter(function (item) {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    if (matches.length === 0) {
        searchResults.innerHTML = "<div class=\"no-result\">No pages found</div>";
        return;
    }
    matches.forEach(function (item, index) {
        var div = document.createElement("div");
        div.textContent = item.name;
        div.className = "search-result-item";
        div.setAttribute("data-href", item.href);
        div.setAttribute("data-index", index.toString());
        // ✅ Handle mouse clicks before blur
        div.addEventListener("mousedown", function () {
            window.location.href = item.href;
        });
        searchResults.appendChild(div);
    });
}
function updateHighlight(items) {
    items.forEach(function (item, i) {
        if (i === activeIndex) {
            item.classList.add("active");
            searchInput.value = item.textContent || "";
        }
        else {
            item.classList.remove("active");
        }
    });
}
searchInput.addEventListener("input", function () {
    var query = searchInput.value.trim();
    if (query.length > 0) {
        renderResults(query);
    }
    else {
        searchResults.innerHTML = "";
    }
});
searchInput.addEventListener("keydown", function (e) {
    var items = document.querySelectorAll(".search-result-item");
    if (items.length === 0)
        return;
    if (e.key === "ArrowDown") {
        activeIndex = (activeIndex + 1) % items.length;
        updateHighlight(items);
        e.preventDefault();
    }
    else if (e.key === "ArrowUp") {
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateHighlight(items);
        e.preventDefault();
    }
    else if (e.key === "Enter" && activeIndex !== -1) {
        var selected = items[activeIndex];
        if (selected) {
            var href = selected.getAttribute("data-href");
            if (href)
                window.location.href = href;
        }
    }
});
// Optional: Give a small delay before clearing to allow click to register
searchInput.addEventListener("blur", function () {
    setTimeout(function () {
        searchResults.innerHTML = "";
    }, 150);
});
document.addEventListener("DOMContentLoaded", function () {
    var headers = document.querySelectorAll(".toggle-header");
    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            var item = header.closest(".toggle-item");
            if (item) {
                item.classList.toggle("active");
            }
        });
    });
});
