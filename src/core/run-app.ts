export function runApp(): void {
    runAnimationLoop();
}

function runAnimationLoop(): void {
    requestAnimationFrame(runAnimationLoop);
}
