const directions = [-1, 1];

class Spider {
  constructor(x, y, w, h) {
    this.position = {
      x: x || 0,
      y: y || 0,
    };
    this.size = {
      height: h || 10,
      width: w || 10,
    };

    this.direction = {
      x: directions[Math.floor(Math.random() * 2)],
      y: directions[Math.floor(Math.random() * 2)],
    };

    this.SpiderImage = new Image();
    this.SpiderImage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/008/505/759/small/bee-insect-color-illustration-png.png";
  }
  draw(ctx) {
    // ctx.beginPath();
    // ctx.arc(this.position.x, this.position.y, this.size.radius, 0, 2 * Math.PI);
    // ctx.fill();

    ctx.drawImage(
      this.SpiderImage,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    this.position.x = this.position.x + this.direction.x;
    this.position.y = this.position.y + this.direction.y;
  }

  collideLeftRight() {
    if (this.position.x + this.size.width >= canvas.width) {
      this.direction.x = this.direction.x - 1;
    } else if (this.position.x <= 0) {
      this.direction.x = this.direction.x + 1;
    }
  }

  collideTopBottom() {
    if (this.position.y + this.size.height >= canvas.height) {
      this.direction.y = this.direction.y - 1;
    } else if (this.position.y <= 0) {
      this.direction.y = this.direction.y + 1;
    }
  }

  update(ctx) {
    this.draw(ctx);
    this.move();
    this.collideLeftRight();
    this.collideTopBottom();
  }
}

export default Spider;
