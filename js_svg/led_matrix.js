function init_matrix() {
    var svg = document.getElementById('SVG');
    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            var c = document.createElementNS("http://www.w3.org/2000/svg",
                "circle");
            c.setAttribute("id", "x" + x + "y" + y);
            c.setAttribute("cx", x * 10 + 5);
            c.setAttribute("cy", y * 10 + 5);
            c.setAttribute("r", "5");
            c.setAttribute("stroke", "red");
            c.setAttribute("fill", "white");
            svg.appendChild(c);
        }
    }
}
