const mouseDown = {
  node0: false,
  node1: false,
};

const offset = {
  node0: [
    document.getElementById("node0").offsetWidth / 2,
    document.getElementById("node0").offsetHeight / 2,
  ],
  node1: [
    document.getElementById("node1").offsetWidth / 2,
    document.getElementById("node1").offsetHeight / 2,
  ],
};

var mouseX, mouseY;

onmousemove = (e) => {
  mouseX = e.x;
  mouseY = e.y;
};

function nodeGrab(target) {
  switch (target) {
    case 0:
      mouseDown.node0 = true;
      break;
    case 1:
      mouseDown.node1 = true;
      break;
  }
}

function nodeDrop(target) {
  switch (target) {
    case 0:
      mouseDown.node0 = false;
      break;
    case 1:
      mouseDown.node1 = false;
      break;
  }
}

setInterval(() => {
  if (mouseDown.node0 == true) {
    document.getElementById("node0").style.left =
      mouseX - offset.node0[0] + "px";
    document.getElementById("node0").style.top =
      mouseY - offset.node0[1] + "px";
  }
  if (mouseDown.node1 == true) {
    document.getElementById("node1").style.left =
      mouseX - offset.node1[0] + "px";
    document.getElementById("node1").style.top =
      mouseY - offset.node1[1] + "px";
  }
});
