<template>
  <div class="w-full overflow-hidden flex flex-column justify-center">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup>
onMounted(() => {
  // Made by https://github.com/Ashikpaul/Starfield-effect/blob/master/script.js
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; // screen width
  canvas.height = window.innerHeight; // screen height

  class Star {
    constructor() {
      //initializes
      this.x = Math.random()*canvas.width-canvas.width/2;  // random x
      this.y = Math.random()*canvas.height-canvas.height/2; // random y
      this.z = Math.random()*4; // random z 
      this.px, this.py;   
    }
    
    update() {
      // stores previous x, y and z and generates new coordinates    
      this.px = this.x;
      this.py = this.y;
      this.z += speed;
      this.x += this.x*(speed*0.2)*this.z;
      this.y += this.y*(speed*0.2)*this.z;
      if (this.x > canvas.width/2+50 || this.x < -canvas.width/2-50 ||
          this.y > canvas.height/2+50 || this.y < -canvas.height/2-50) {
        this.x = Math.random()*canvas.width-canvas.width/2;
        this.y = Math.random()*canvas.height-canvas.height/2;
        this.px = this.x;
        this.py = this.y;
        this.z = 0;
      }
    }
    
    // draws line from x,y to px,py
    show() {    
      ctx.lineWidth = this.z;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.px, this.py);
      ctx.stroke();
    }
  }

  let speed = 0.02;
  let stars = [];

  // create 1500 stars (objects)
  for (let i = 0; i < 500; i++) stars.push(new Star());

  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.strokeStyle = 'white';

  ctx.translate(canvas.width/2, canvas.height/2);

  function draw() {
    // create rectangle
    ctx.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    for (let s of stars) {
      s.update();
      s.show();
    }
    // infinte call to draw
    requestAnimationFrame(draw);
  }

  draw();
}) 
</script>

