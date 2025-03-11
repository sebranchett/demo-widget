const DOT_RADIUS = 10; // Radius of terminal dots

export function drawDot(ctx, x, y, model) {
    ctx.beginPath();
    ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = model.get("colour");
    ctx.fill();
}