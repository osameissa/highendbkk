// Mouse-following smoke particles
const particles = [];

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.className = "mouse-particle";
  particle.style.left = `${x - 15}px`;
  particle.style.top = `${y - 15}px`;
  particle.style.opacity = "1";
  particle.style.transform = "scale(1)";
  document.body.appendChild(particle);
  particles.push({ element: particle, opacity: 1, scale: 1 });
}

function updateParticles() {
  particles.forEach((particle, index) => {
    particle.opacity -= 0.03;
    particle.scale += 0.02;
    particle.element.style.opacity = particle.opacity;
    particle.element.style.transform = `scale(${particle.scale})`;
    if (particle.opacity <= 0) {
      particle.element.remove();
      particles.splice(index, 1);
    }
  });
}

// Mouse move event
document.addEventListener("mousemove", (e) => {
  createParticle(e.clientX, e.clientY);
});

// Update particles every 50ms
setInterval(updateParticles, 50);
