function init_matrix() {
  var led_r = 10;
  var nx = 8;
  var ny = 8;
  var margin = 1;

  var svg = document.getElementById('SVG');

  svg.setAttribute("width", margin * 2 + (led_r * 2) * nx);
  svg.setAttribute("height", margin * 2 + (led_r * 2) * ny);

  for (var y = 0; y < ny; y++) {
    for (var x = 0; x < nx; x++) {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("id", "x" + x + "y" + y);
      c.setAttribute("cx", x * (led_r * 2) + led_r + margin);
      c.setAttribute("cy", y * (led_r * 2) + led_r + margin);
      c.setAttribute("r", led_r);
      c.setAttribute("class", "off");
      svg.appendChild(c);
    }
  }
}
