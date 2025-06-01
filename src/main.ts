import './style.css';
import p5 from 'p5';

const fullX = window.innerWidth;
const fullY = window.innerHeight;

const rectSize = fullY / 8;

let startY = fullY / 2 + rectSize;
let angle = 0;
const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(fullX, fullY);
    p.rectMode(p.CENTER);
    p.background(35);
    p.angleMode(p.DEGREES);
  };

  p.draw = () => {
    p.background(35);
    p.translate(fullX / 2, fullY / 2);
    p.fill(32);
    p.stroke('white');

    //p.rotate(angle);
    if (startY <= 0) {
      p.rotate(angle);
      p.rect(0, 0, rectSize, rectSize);
    } else {
      p.rect(0, startY, rectSize, rectSize);
    }
  };

  p.mouseWheel = (event: WheelEvent) => {
    console.log(`startY: ${startY} fullY/2: ${fullY / 2}`);
    startY -= event.deltaY * 0.15;
    angle += event.deltaY * 0.1;
  };
};

new p5(sketch, document.getElementById('app') || document.createElement('div'));
