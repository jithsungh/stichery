const canvas = document.getElementById("mycanvas");
const canvas2 = document.getElementById("mycanvas2");
const canvas3 = document.getElementById("mycanvas3");
const canvas4 = document.getElementById("mycanvas4");

const canvasData = {
  mycanvas: { x: 200, y: 450 },
  mycanvas2: { x: 230, y: 450 },
  mycanvas3: { x: 360, y: 240 },
  mycanvas4: { x: 600, y: 450 },
};
function moveCanvas(canvasId, direction) {
  const movement = 10;
  if (direction === "up") canvasData[canvasId].y -= movement;
  if (direction === "down") canvasData[canvasId].y += movement;
  if (direction === "left") canvasData[canvasId].x -= movement;
  if (direction === "right") canvasData[canvasId].x += movement;

  onFormChange();
}
var pencolor = "rgb(53, 246, 53)";
function changeColor(newcolor) {
  pencolor = newcolor;
  onFormChange();
}
function changeCanvas(cc) {
  canvas.style.backgroundColor = cc;
  canvas2.style.backgroundColor = cc;
  canvas3.style.backgroundColor = cc;
  canvas4.style.backgroundColor = cc;
  onFormChange();
}
document
  .getElementById("measurementForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    onFormChange();
  });

function onFormChange() {
  console.log("A form element has changed.");

  // Add any other functionality you need here
  let len = document.getElementById("length").value;

  let che = document.getElementById("chest").value;
  let sho = document.getElementById("shoulder").value;
  let col = document.getElementById("collor").value;
  let han = document.getElementById("hand").value;
  let hln = document.getElementById("handlength").value;
  let hdd = document.getElementById("handdown").value;
  let nk = document.getElementById("neck").value;
  let st = document.getElementById("stomach").value;
  let arm = document.getElementById("arm").value;
  let ar = document.getElementById("armround").value;
  let sl1 = document.getElementById("shoulderlen").value;

  console.log(len, che, sho, col, han, hln);
  /*let len=30;
    let che=35;
    let sho=18;
    let col=15;
    let han=16;
    let hln=24;*/
  len = parseFloat(len) * 20;
  che = parseFloat(che) * 20;
  sho = parseFloat(sho) * 20;
  col = parseFloat(col) * 20;
  han = parseFloat(han) * 20;
  hln = parseFloat(hln) * 20;

  console.log(len, che, sho, col, han, hln);
  let t = (che + 160) / 4;
  let v = t;
  let u = t - st * 20;
  let a = 0;
  let p = 0;
  let b = a + 44;
  let c = a + nk * 20;
  let q = 30;
  let sl = sl1 * 20;

  let r = c;
  let hd = hdd * 20;
  let d = a + hd;
  let g = a + len;
  let e = (d + g) / 2;
  let s = sho / 2;
  let z = s - ar * 20;
  let f = g - 50;

  if (canvas) {
    canvas.width = 960;
    canvas.height = 480;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = pencolor;
    x = canvasData["mycanvas"].x;
    y = canvasData["mycanvas"].y;

    ctx.fillRect(x + a, y, 1, 1);
    ctx.fillRect(x + b, y, 1, 1);
    ctx.fillRect(x + c, y, 1, 1);
    ctx.fillRect(x + d, y, 1, 1);
    ctx.fillRect(x + e, y, 1, 1);
    ctx.fillRect(x + g, y, 1, 1);

    ctx.fillRect(x + a, y - q - p, 1, 1);
    ctx.fillRect(x + b, y - q - s, 1, 1);
    ctx.fillRect(x, y - q - r, 1, 1);
    ctx.fillRect(x + c, y - q, 1, 1);
    ctx.fillRect(x + c, y - q - r, 1, 1);
    ctx.fillRect(x + d, y - q - t, 1, 1);
    ctx.fillRect(x + d, y - q - z, 1, 1);
    ctx.fillRect(x + g, y - q - v, 1, 1);
    ctx.fillRect(x + e, y - q - u, 1, 1);
    ctx.fillRect(x + f, y - q, 1, 1);

    ctx.beginPath();
    ctx.moveTo(x + a, y - q);
    ctx.lineTo(x + g, y - q);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + a, y);
    ctx.lineTo(x + g, y);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + a, y - q - r);
    ctx.lineTo(x + b, y - q - s);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + a, y - q - r);
    ctx.lineTo(x + c, y - q - r);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + c, y - q - r);
    ctx.lineTo(x + c, y - q);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + c, y - q);
    ctx.lineTo(x + b, y);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + d, y - q - t);
    ctx.lineTo(x + d, y);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + g, y);
    ctx.lineTo(x + g, y - q);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + b, y - q - s);
    ctx.lineTo(x + d, y - q - z);
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + b, y - q - s);
    ctx.quadraticCurveTo(
      x + d - (t - z) + arm * 20,
      y - q - s + (t - z) - (arm * 20) / 2.5,
      x + d,
      y - q - t
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + d, y - q - t);
    ctx.quadraticCurveTo(x + e, y - q - u + 16, x + f, y - q - v);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + a, y - q - r);
    ctx.quadraticCurveTo(x + a + c - 8, y - q - c + 8, x + c, y - q);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + f, y - q - v);
    ctx.bezierCurveTo(
      x + f + 10,
      y - q - v + 100,
      x + g + 10,
      y - q - v + 60,
      x + g,
      y - q
    );
    ctx.stroke();

    console.log("t:" + t / 20);
  }
  if (canvas2) {
    canvas2.width = 960;
    canvas2.height = 480;
    const ctx2 = canvas2.getContext("2d");
    ctx2.strokeStyle = pencolor;
    x = canvasData["mycanvas2"].x;
    y = canvasData["mycanvas2"].y;

    ctx2.fillRect(x + b, y - q, 1, 1);
    ctx2.fillRect(x + d, y - q, 1, 1);
    ctx2.fillRect(x + e, y - q, 1, 1);
    ctx2.fillRect(x + g, y - q, 1, 1);

    ctx2.fillRect(x + b, y - q - s, 1, 1);

    ctx2.fillRect(x + d, y - q - t, 1, 1);
    ctx2.fillRect(x + d, y - q - z, 1, 1);
    ctx2.fillRect(x + g, y - q - v, 1, 1);
    ctx2.fillRect(x + e, y - q - u, 1, 1);
    ctx2.fillRect(x + f, y - q, 1, 1);

    ctx2.beginPath();
    ctx2.moveTo(x + b, y - q - s);
    ctx2.quadraticCurveTo(
      x + d - (t - z) + (arm * 20) / 1.67,
      y - q - z + (arm * 20) / 5,
      x + d,
      y - q - t
    );
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.moveTo(x + d, y - q - t);
    ctx2.quadraticCurveTo(x + e, y - q - u + 16, x + f, y - q - v);
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.moveTo(x + f, y - q - v);
    ctx2.bezierCurveTo(
      x + f + 10,
      y - q - v + 100,
      x + g + 10,
      y - q - v + 40,
      x + g,
      y - q
    );
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.moveTo(x + b, y - q);
    ctx2.lineTo(x + b, y - q - s);
    ctx2.lineWidth = 1;
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.moveTo(x + b, y - q);
    ctx2.lineTo(x + g, y - q);
    ctx2.lineWidth = 1;
    ctx2.stroke();
  }
  if (canvas3) {
    canvas3.width = 960;
    canvas3.height = 480;

    const ctx3 = canvas3.getContext("2d");
    ctx3.strokeStyle = pencolor;
    x = canvasData["mycanvas3"].x;
    y = canvasData["mycanvas3"].y;

    h = 0;
    j = h + hln - 30;
    i = j - 80;
    l = han / 2 + 10;
    k = Math.ceil(Math.ceil((2 * han) / 3) / 2) + 10;

    ctx3.fillRect(x + h, y, 1, 1);
    ctx3.fillRect(x + j, y, 1, 1);
    ctx3.fillRect(x + i, y, 1, 1);
    ctx3.fillRect(x + h, y - k, 1, 1);
    ctx3.fillRect(x + i, y - l, 1, 1);

    ctx3.beginPath();
    ctx3.moveTo(x + h, y);
    ctx3.lineTo(x + j, y);
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + h, y);
    ctx3.lineTo(x + h, y - k);
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + h, y - k);
    ctx3.quadraticCurveTo(x + h + 2 * (i / 3) + 20, y - k - 6, x + i, y - l);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + i, y - l);

    ctx3.bezierCurveTo(x + i - 10, y - l + 20, x + j + 10, y - 80, x + j, y);
    ctx3.stroke();

    ctx3.fillRect(x + h, y, 1, 1);
    ctx3.fillRect(x + j, y, 1, 1);
    ctx3.fillRect(x + i, y, 1, 1);
    ctx3.fillRect(x + h, y + k, 1, 1);
    ctx3.fillRect(x + i, y + l, 1, 1);

    ctx3.beginPath();
    ctx3.moveTo(x + h, y);
    ctx3.lineTo(x + j, y);
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + h, y);
    ctx3.lineTo(x + h, y + k);
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + h, y - (k - 5) / 2);
    ctx3.lineTo(x + 74, y - (k - 5) / 2 - 2);
    ctx3.lineWidth = 1;
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + h, y + k);
    ctx3.quadraticCurveTo(x + h + 2 * (i / 3) + 20, y + k + 6, x + i, y + l);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + i, y + l);

    ctx3.bezierCurveTo(x + i + 30, y + l - 120, x + j, y + 80, x + j, y);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(x + i, y + l);

    ctx3.bezierCurveTo(x + i - 10, y + l - 20, x + j + 10, y + 80, x + j, y);
    ctx3.stroke();

    console.log(k);
  }
  if (canvas4) {
    canvas4.width = 960;
    canvas4.height = 480;

    const ctx4 = canvas4.getContext("2d");
    ctx4.strokeStyle = pencolor;

    x = canvasData["mycanvas4"].x;
    y = canvasData["mycanvas4"].y;
    ctx4.fillRect(x - sl, y - q - c, 1, 1);
    ctx4.fillRect(x - sl + c, y - q - c, 1, 1);
    ctx4.fillRect(x - sl + c, y - q, 1, 1);
    ctx4.fillRect(x - sl + 40, y - q - s, 1, 1);
    ctx4.fillRect(x + b, y - q, 1, 1);

    ctx4.beginPath();
    ctx4.moveTo(x - sl + c, y - q);
    ctx4.lineTo(x + b, y - q);
    ctx4.lineWidth = 1;
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x - sl + c, y - q);
    ctx4.lineTo(x + -sl + c, y - q - c);
    ctx4.lineWidth = 1;
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x - sl + c, y - q - c);
    ctx4.lineTo(x - sl, y - q - c);
    ctx4.lineWidth = 1;
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x - sl, y - q - c);
    ctx4.lineTo(x - sl + 40, y - q - s - 6);
    ctx4.lineWidth = 1;
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x - sl + 40 - 1, y - q - s - 6);
    ctx4.quadraticCurveTo(x - 20 - 2, y - q - s, x + b, y - q - s);
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x - sl, y - q - c);
    ctx4.quadraticCurveTo(x - sl + c + 5, y - q - c - 5, x - sl + c, y - q);
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(x + b, y - q);
    ctx4.lineTo(x + b, y - q - s);
    ctx4.lineWidth = 1;
    ctx4.stroke();
  }
}

// Get the form element
const form = document.getElementById("measurementForm");

// Add event listeners to all input elements
form.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", onFormChange);
});
