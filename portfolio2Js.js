
      // JavaScript for mobile menu and animated text
      const menuIcon = document.getElementById("menu-icon");
      const navbar = document.getElementById("navbar-menu");
      const overlay = document.getElementById("overlay");
      const navLinks = document.querySelectorAll(".navbar a");

      function toggleMenu() {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
      }

      menuIcon.addEventListener("click", toggleMenu);
      overlay.addEventListener("click", toggleMenu);

      // Close menu when a link is clicked
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navbar.classList.remove("active");
          overlay.classList.remove("active");
        });
      });

      // Close menu on scroll
      window.addEventListener("scroll", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
      });

      const typed = new Typed(".multiple-text", {
        strings: [
          "Cybersecurity Analyst",
          "Digital Guardian",
          "Security Expert",
        ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true,
      });
  