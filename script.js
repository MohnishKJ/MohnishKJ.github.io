// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href'); // Get the target section ID
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth' // Smooth scroll to the target section
    });
  });
});

// Form Validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Form submitted successfully!'); // Show success message
    form.reset(); // Reset the form fields after submission
  });
}

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#64ffda", // Teal color for particles
    },
    shape: {
      type: "circle", // Shape of particles (circle, square, etc.)
    },
    opacity: {
      value: 0.5, // Transparency of particles
      random: true,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 3, // Size of particles
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150, // Distance between connected particles
      color: "#64ffda", // Color of connecting lines
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2, // Speed of particle movement
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Particles repel on hover
      },
      onclick: {
        enable: true,
        mode: "push", // Add new particles on click
      },
    },
    modes: {
      repulse: {
        distance: 100, // Repulsion distance on hover
      },
      push: {
        particles_nb: 4, // Number of particles added on click
      },
    },
  },
  retina_detect: true,
});
