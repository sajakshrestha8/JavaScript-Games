import Spider from "./spider.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseDirection = {
  x: 0,
  y: 0,
};

const spider = new Spider(
  Math.random() * canvas.width - 10,
  Math.random() * canvas.height - 10
);

let spiderHouse = Array.from(
  { length: 10 },
  () =>
    new Spider(
      Math.random() * (canvas.width - 20),
      Math.random() * (canvas.height - 20),
      30,
      30
    )
);

const backGroundImage = new Image();
backGroundImage.src =
  "https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?cs=srgb&dl=pexels-fwstudio-33348-129733.jpg&fm=jpg";

function gameLoop() {
  let followMouse = {
    x: mouseDirection.x,
    y: mouseDirection.y,
    w: 10,
    h: 10,
  };

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(backGroundImage, 0, 0, canvas.width, canvas.height);

  spiderHouse.forEach((spider) => {
    if (isCollision(spider, followMouse)) {
      console.log("collision");
    }
    spider.update(ctx);
  });

  ctx.beginPath();
  ctx.rect(followMouse.x, followMouse.y, followMouse.w, followMouse.h);
  ctx.fill();

  requestAnimationFrame(gameLoop);
}

function isCollision(box1, box2) {
  return (
    box1.x < box2.x + box2.w &&
    box1.x + box1.w > box2.x &&
    box1.y < box2.y + box2.h &&
    box1.y + box1.h > box2.y
  );
}

requestAnimationFrame(gameLoop);

canvas.addEventListener("mousemove", (e) => {
  const boundedArea = canvas.getBoundingClientRect();

  mouseDirection = {
    x: e.x - boundedArea.left,
    y: e.y - boundedArea.top,
  };
});
