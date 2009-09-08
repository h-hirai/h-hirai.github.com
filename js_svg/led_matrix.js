var NumX = 8;
var NumY = 8;
var Interval = 100;

function switch_led(x, y, state) {
    var c = document.getElementById("x" + x + "y" + y);
    c.setAttribute("class", state);
}

function update_matrix(sig) {
    for (var y = 0; y < NumY; y++) {
        for (var x = 0; x < NumX; x++) {
            switch_led(x, y, sig[x] == "1" && sig[y + 8] == "1" ? "on" : "off");
        }
    }
}

function load_data() {
    var req = new XMLHttpRequest();
    req.open('GET', './led_matrix.data', false);
    req.send(null);

    var sig_seq = req.responseText.split("\n");
    var cnt_seq = 0;
    var timerId = setInterval(
        function() {
            update_matrix(sig_seq[cnt_seq]);
            cnt_seq = cnt_seq >= sig_seq.length - 1 ? 0 : cnt_seq + 1;
        }, Interval);

    document.getElementById("SVG").onclick =
        function() {
            clearInterval(timerId);
            document.getElementById("SVG").onclick = load_data;
        }
}

function init_matrix() {
    var LedR = 10;
    var Margin = 1;

    var svg = document.getElementById("SVG");
    svg.onclick = load_data;

    svg.setAttribute("width", Margin * 2 + (LedR * 2) * NumX);
    svg.setAttribute("height", Margin * 2 + (LedR * 2) * NumY);

    for (var y = 0; y < NumY; y++) {
        for (var x = 0; x < NumX; x++) {
            var c = document.createElementNS("http://www.w3.org/2000/svg",
                                             "circle");
            c.setAttribute("id", "x" + x + "y" + y);
            c.setAttribute("cx", x * (LedR * 2) + LedR + Margin);
            c.setAttribute("cy", y * (LedR * 2) + LedR + Margin);
            c.setAttribute("r", LedR);
            c.setAttribute("class", "off");
            svg.appendChild(c);
        }
    }
}
