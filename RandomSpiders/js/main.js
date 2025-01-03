import Spider from "./spider.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const spider = new Spider(
  Math.random() * canvas.width - 10,
  Math.random() * canvas.height - 10
);

let spiderHouse = Array.from(
  { length: 100 },
  () =>
    new Spider(
      Math.random() * (canvas.width - 20),
      Math.random() * (canvas.height - 20)
    )
);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spiderHouse.forEach((spider) => {
    spider.draw(ctx);
  });

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
