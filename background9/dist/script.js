const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = window.innerWidth * devicePixelRatio;
const height = window.innerHeight * devicePixelRatio;

canvas.width = width;
canvas.height = height;

canvas.style.width = width / devicePixelRatio + "px";
canvas.style.height = height / devicePixelRatio + "px";

const render = (time) => {
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, width, height);
  const margin = height;

  for (let h = -margin; h < height + margin; h += height / 30) {
    ctx.fillStyle = "transparent";
    ctx.beginPath();
    // ctx.moveTo(0, h);
    for (let w = 0; w < width; w++) {
      // ctx.lineTo(width, h);
      ctx.lineTo(
        w,
        h +
          w +
          Math.sin(((w * h) / 200) * 0.001 + time / 2000) *
            Math.cos(time / 1000) *
            100
      );
      // ctx.closePath();
    }
    // ctx.strokeStyle = `rgba(119, 255, 120, ${1})`;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  ctx.globalCompositeOperation = "multiply";
  const gradient = ctx.createLinearGradient(-20, -20, width, height);
  gradient.addColorStop(0, "black");
  gradient.addColorStop(0.5, "violet");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
};

const animate = (time) => {
  render(time);

  requestAnimationFrame(animate);
};

animate();