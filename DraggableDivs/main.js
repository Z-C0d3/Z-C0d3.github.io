// Keep track of whether or not mouse is down on either node
const mouseDown = {
  node0: false,
  node1: false,
};

// Calculate offset needed for nodes to be centered relative to cursor when dragged
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

// Always keep track of mouse X and Y position
var mouseX, mouseY;

onmousemove = (e) => {
  mouseX = e.x;
  mouseY = e.y;
};

// Let system know when mouse is down on node (of 'target')
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

// Let system know when mouse is up on node (of 'target')
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

// If holding down on a node, set node position to cursor position
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
