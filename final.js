// Final Project: Julia K. And Anna
let colorInput = document.getElementById('mycolor').value;
let cir = []

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    createCanvas(1000,800);
    noStroke()
  for(let i = 0; i < 100; i++) {
    cir[i] = new Oval()
  }
}

function draw() {
    colorInput = document.getElementById('mycolor').value;
  for(let i = 0; i < cir.length; i++)
    {
      fill(cir[i].color)
      ellipse(cir[i].x,cir[i].y, cir[i].diameter)

    }
}


function mouseDragged() {
    cir.push(new Oval)
}


class Oval {
  constructor() {
    this.x = mouseX,
    this.y = mouseY,
    this.diameter = 10,
    this.color = colorInput;
  }
}




























