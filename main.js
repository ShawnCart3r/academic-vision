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
