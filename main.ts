function toggleMenu(): void {
  const navLinks = document.getElementById("navLinks") as HTMLElement | null;
  if (navLinks !== null) {
    navLinks.classList.toggle("active");
  }
}
function bookAppointment(): void {
  window.location.href = "/booking-page"; // replace with actual URL
}
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>('.standard-card');

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          observerInstance.unobserve(target); // Stop observing after fade-in
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll<HTMLElement>('.section-block');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  blocks.forEach(block => observer.observe(block));
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>(".academic-team-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>(".academic-team-card");

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add("visible");
        observerInstance.unobserve(target);
      }
    });
  }, {
    threshold: 0.1,
  });

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>(".academic-advisory-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>(".academic-qsm-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll<HTMLElement>(".academic-team-card");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
});
function toggleService(headerElement: HTMLElement): void {
  const clickedCard = headerElement.closest('.academic-service-card') as HTMLElement | null;
  if (!clickedCard) return;

  // Close all other cards
  const allCards = document.querySelectorAll<HTMLElement>('.academic-service-card');
  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove('open');
    }
  });

  // Toggle the clicked one
  clickedCard.classList.toggle('open');
}
type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
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

const searchInput = document.getElementById("search") as HTMLInputElement;
const searchResults = document.getElementById("search-results") as HTMLDivElement;

let activeIndex = -1;

function renderResults(query: string): void {
  searchResults.innerHTML = "";
  activeIndex = -1;

  const matches: NavItem[] = navItems.filter(item =>
    item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="no-result">No pages found</div>`;
    return;
  }

  matches.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = item.name;
    div.className = "search-result-item";
    div.setAttribute("data-href", item.href);
    div.setAttribute("data-index", index.toString());

    // ✅ Handle mouse clicks before blur
    div.addEventListener("mousedown", () => {
      window.location.href = item.href;
    });

    searchResults.appendChild(div);
  });
}

function updateHighlight(items: NodeListOf<Element>): void {
  items.forEach((item, i) => {
    if (i === activeIndex) {
      item.classList.add("active");
      searchInput.value = item.textContent || "";
    } else {
      item.classList.remove("active");
    }
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (query.length > 0) {
    renderResults(query);
  } else {
    searchResults.innerHTML = "";
  }
});

searchInput.addEventListener("keydown", (e: KeyboardEvent) => {
  const items = document.querySelectorAll(".search-result-item");

  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    activeIndex = (activeIndex + 1) % items.length;
    updateHighlight(items);
    e.preventDefault();
  } else if (e.key === "ArrowUp") {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateHighlight(items);
    e.preventDefault();
  } else if (e.key === "Enter" && activeIndex !== -1) {
    const selected = items[activeIndex] as HTMLElement;
    if (selected) {
      const href = selected.getAttribute("data-href");
      if (href) window.location.href = href;
    }
  }
});

// Optional: Give a small delay before clearing to allow click to register
searchInput.addEventListener("blur", () => {
  setTimeout(() => {
    searchResults.innerHTML = "";
  }, 150);
});
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll<HTMLDivElement>(".toggle-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".toggle-item");
      if (item) {
        item.classList.toggle("active");
      }
    });
  });
});