const DOT_RADIUS = 10; // Radius of terminal dots

export function render({ model, el }) {
    let canvas = document.createElement("canvas");
    canvas.id = 'circuitCanvas';
    canvas.width = 400;
    canvas.height = 300;
    canvas.style.border = '1px solid black';
    let ctx = canvas.getContext("2d");

    // Draw a terminal dot
    function drawDot(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    canvas.addEventListener("click", () => {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        drawDot(x, y);
        model.set("x_value", x);
        model.set("y_value", y);
        model.save_changes();
    });
    
    el.classList.add("QuCATWidget");
    el.appendChild(canvas);
}
