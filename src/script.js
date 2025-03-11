import { drawDot } from "./drawing/drawDot";

export function render({ model, el }) {
    let canvas = document.createElement("canvas");
    canvas.id = 'circuitCanvas';
    canvas.width = 200;
    canvas.height = 200;
    canvas.style.border = '1px solid black';
    let ctx = canvas.getContext("2d");

    canvas.addEventListener("click", () => {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        drawDot(ctx, x, y, model);
        model.set("x_value", x);
        model.set("y_value", y);
        model.save_changes();
    });
    
    el.classList.add("QuCATWidget");
    el.appendChild(canvas);
}
