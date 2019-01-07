// existing working collage code
const imageSources = [
  'img/Badminton.svg',
  'img/Green-Circle.svg',
  'img/Smiley.svg',
  'img/optimised/banana.png',
  'img/optimised/apricot.png',
  'img/optimised/orange.png',
  'img/optimised/mango.png',
  'img/optimised/kiwi-etched.png',
  'img/optimised/watermelon-etched.png',
  'img/Raquettes-Logo-white.svg',
];

let images = [];
for (let i = 0; i < imageSources.length; i++) {
  let x = new Image();
  x.src = imageSources[i];
  images.push(x);
}

let index = 0


function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}

function angleBetween(point1, point2) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

var el = document.getElementById('c');
var ctx = el.getContext('2d');
ctx.lineJoin = ctx.lineCap = 'round';

var isDrawing, lastPoint;

el.onmousedown = function (e) {
  isDrawing = true;
  lastPoint = {
    x: e.clientX,
    y: e.clientY
  };
};

el.onmousemove = function (e) {
  if (!isDrawing) return;

  var currentPoint = {
    x: e.clientX,
    y: e.clientY
  };
  var dist = distanceBetween(lastPoint, currentPoint);
  var angle = angleBetween(lastPoint, currentPoint);

  for (var i = 0; i < dist; i++) {
    x = lastPoint.x + (Math.sin(angle) * i) - 160;
    y = lastPoint.y + (Math.cos(angle) * i) - 160;
    ctx.drawImage(img, x, y);
  }

  lastPoint = currentPoint;
};

el.onmouseup = function () {
  isDrawing = false;
  index += 1;
  if (index >= images.length) {
    index = 0;
  }
};


function placeImage(x, y) {
  const nextSrc = images[index]

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc)
  img.setAttribute("draggable", "true")

  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})