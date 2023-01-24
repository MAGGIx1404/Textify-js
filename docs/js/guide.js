const links = document.querySelectorAll(".side-list-item:not(.big) a");
const sections = document.querySelectorAll(".guide-wrapper");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.side-list-item a[href="#${id}"]`);
      links.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    } else {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.side-list-item a[href="#${id}"]`);
      link.classList.remove("active");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
