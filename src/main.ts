import './style.css';
import p5 from 'p5';

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(2);
  };

  p.draw = () => {
    p.fill(225, 0, 0, 100);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

new p5(sketch, 'app');
