// ===== HAPROX CANVAS CHEAT SHEET =====

// (0,0) is TOP-LEFT corner
// X increases ➝ right
// Y increases ➝ downward

// ---- COLORS ----
canvas.fillStyle = "red";        // Fill color
canvas.strokeStyle = "blue";     // Border color
canvas.lineWidth = 3;            // Line thickness

// ---- RECTANGLES ----
canvas.fillRect(50, 50, 150, 100);     // Filled rectangle
canvas.strokeRect(250, 50, 150, 100);  // Border rectangle

// ---- CLEAR AREA ----
canvas.clearRect(60, 60, 30, 30); // Erase small area

// ---- CIRCLE ----
canvas.beginPath();
canvas.arc(150, 250, 50, 0, Math.PI * 2);
canvas.fill();

// ---- LINE ----
canvas.beginPath();
canvas.moveTo(250, 200);
canvas.lineTo(400, 300);
canvas.stroke();

// ---- TEXT ----
canvas.font = "25px Arial";
canvas.fillText("Hello HaproX!", 180, 350);

// ---- SIMPLE ANIMATION ----
let x = 0;

function animate(){
  canvas.clearRect(0,0,600,400);
  canvas.fillRect(x, 10, 50, 50);
  x++;
  requestAnimationFrame(animate);
}

// Uncomment next line if you want animation
// animate();
