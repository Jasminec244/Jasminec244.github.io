// Many Particle Systems (Emitters!)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/wDYD3JVtOys
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-emitters.html

// Particle Emitters: https://editor.p5js.org/codingtrain/sketches/YqAxA5CYy
// Particle Emitters with Movers Exercise: https://editor.p5js.org/codingtrain/sketches/UXmqwcpRL
// Particles Following Mouse Exercise: https://editor.p5js.org/codingtrain/sketches/1zTN6PYJg
// Particle Emitters Color Exercise: https://editor.p5js.org/codingtrain/sketches/IYisp9xmJ

let emitters = [];
let emitter

function mousePressed() {
  // emitters.push(new Emitter(mouseX, mouseY));
  // for (let emitter of emitters) {
  //   emitter.emit(100)
  // }
  emitters[0] = new Emitter(mouseX, mouseY)
  emitters[0].emit(150)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let emitter of emitters) {
    //emitter.emit(5);
    emitter.show();
    emitter.update();
  }
}
