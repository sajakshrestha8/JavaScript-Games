const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Draw a line
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();

//Draw a circle
ctx.beginPath();
//ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise)
ctx.arc(350, 350, 50, 0, 10);
ctx.stroke();

//Write a Text
ctx.font = "20px Arial";
ctx.fillText("Normal Text hai", 200, 50); //ctx.fillText("Information<string>", x, y);
ctx.strokeText("Stoke gareko hai", 200, 100);

//Draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 40, 40); //ctx.fillRect(x,y,width,height);
