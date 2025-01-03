class Spider {
  constructor(x, y, r) {
    this.position = {
      x: x || 0,
      y: y || 0,
    };
    this.size = {
      radius: r || 10,
    };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.size.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Spider;
