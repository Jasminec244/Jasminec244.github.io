// Many Particle Systems (Emitters!)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/wDYD3JVtOys
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-emitters.html


class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.particles = [];
  }

  emit(num) {
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.position.x + random(-10,10), this.position.y + random(-10,10)));
    }
  }

  update() {
    for (let particle of this.particles) {
      let gravity = createVector(0, 0.1);
      particle.applyForce(gravity);
      particle.update();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }

  setColor(color) {
    for (let particle of this.particles) {
      particle.setColor(color);
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}
