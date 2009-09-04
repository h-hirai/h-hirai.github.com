var NumX = 8;
var NumY = 8;

function switch_led(x, y, state) {
  var c = document.getElementById("x" + x + "y" + y);
  c.setAttribute("class", state);
}

function update_matrix(ary) {
  for (var y = 0; y < NumY; y++) {
    for (var x = 0; x < NumX; x++){
      switch_led(x, y, ary[y][x] == "1" ? "on" : "off");
    }
  }
}

function load_data_and_update_matrix() {
  var req = new XMLHttpRequest();
  req.open('GET', './led_matrix.data', false);
  req.send(null);
  update_matrix(req.responseText.split("\n"));
}

function init_matrix() {
  var LedR = 10;
  var Margin = 1;

  var svg = document.getElementById("SVG");
  svg.onclick = load_data_and_update_matrix;

  svg.setAttribute("width", Margin * 2 + (LedR * 2) * NumX);
  svg.setAttribute("height", Margin * 2 + (LedR * 2) * NumY);

  for (var y = 0; y < NumY; y++) {
    for (var x = 0; x < NumX; x++) {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("id", "x" + x + "y" + y);
      c.setAttribute("cx", x * (LedR * 2) + LedR + Margin);
      c.setAttribute("cy", y * (LedR * 2) + LedR + Margin);
      c.setAttribute("r", LedR);
      c.setAttribute("class", "off");
      svg.appendChild(c);
    }
  }
}
