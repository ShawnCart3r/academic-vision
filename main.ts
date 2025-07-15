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