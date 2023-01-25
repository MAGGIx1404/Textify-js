const links = document.querySelectorAll(".side-list-item:not(.big) a");
const sections = document.querySelectorAll(".guide-wrapper");
const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".side-bar")

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  }, options);
});

sections.forEach((section) => {
  observer.observe(section);
});

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
  });

  menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("active");
  })
