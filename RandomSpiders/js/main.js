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

let followMouse = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
};

console.log(spider);

const backGroundImage = new Image();
backGroundImage.src =
  "https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?cs=srgb&dl=pexels-fwstudio-33348-129733.jpg&fm=jpg";

function gameLoop() {
  followMouse = {
    x: mouseDirection.x,
    y: mouseDirection.y,
    w: 10,
    h: 10,
  };

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(backGroundImage, 0, 0, canvas.width, canvas.height);

  spiderHouse.forEach((spider) => {
    spider.update(ctx);
    // console.log(followMouse);
  });

  ctx.beginPath();
  ctx.rect(followMouse.x, followMouse.y, followMouse.w, followMouse.h);
  ctx.fill();

  requestAnimationFrame(gameLoop);
}

function isCollision(spider, box2) {
  return (
    spider.position.x < box2.x + box2.w &&
    spider.position.x + spider.size.width > box2.x &&
    spider.position.y < box2.y + box2.h &&
    spider.position.y + spider.size.height > box2.y
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

console.log(spider);

canvas.addEventListener("click", () => {
  spiderHouse.forEach((spider) => {
    if (isCollision(spider, followMouse)) {
      console.log("collision vayo dai ko");
      (spider.direction.x = 0), (spider.direction.y = 0);
    }
  });
});
