const svgNS = 'http://www.w3.org/2000/svg';
const container = document.getElementById('waveContainer');

const numWaves = Math.floor(Math.random() * 5) + 3; // Generate 3 to 7 waves
const waveSpacing = 700 / numWaves; // Space waves evenly
const waves = [];

function noiseWaveFunction(x, amplitude, frequency, phase) {
  return (
    (amplitude *
      (Math.sin(((x * frequency + phase) * Math.PI) / 180) +
        Math.cos(((x * frequency * 0.5 + phase) * Math.PI) / 180))) /
    2
  );
}

function generateWavePath(yOffset, amplitude, frequency, phase, angle) {
  let path = `M 0,${yOffset} `;

  for (let x = 0; x <= 1000; x += 20) {
    let angleOffset = Math.tan((angle * Math.PI) / 180) * x; // Adjust wave start direction
    let y =
      yOffset + noiseWaveFunction(x, amplitude, frequency, phase) + angleOffset;
    path += `L ${x},${y} `;
  }

  return path + `L 1000,500 L 0,500 Z`;
}

function createWave(index) {
  let wave = document.createElementNS(svgNS, 'path');

  let amplitude = Math.random() * 30 + 20;
  let frequency = Math.random() * 0.5 + 0.1;
  let phase = Math.random() * 360;
  let angle = Math.random() * 90 - 45; // Random wave start angle (-30° to +30°)
  console.log(angle);
  let yOffset = index * waveSpacing + 50;
  let color = `hsl(${Math.random() * 360}, 80%, 60%)`;

  wave.setAttribute(
    'd',
    generateWavePath(yOffset, amplitude, frequency, phase, angle)
  );
  wave.setAttribute('fill', color);
  wave.setAttribute('opacity', '0.6');
  container.appendChild(wave);

  waves.push({ element: wave, amplitude, frequency, phase, angle, yOffset });
}

for (let i = 0; i < numWaves; i++) {
  createWave(i);
}

function updateWaves() {
  for (let wave of waves) {
    wave.phase += 0.3; // Move forward
    wave.element.setAttribute(
      'd',
      generateWavePath(
        wave.yOffset,
        wave.amplitude,
        wave.frequency,
        wave.phase,
        wave.angle
      )
    );
  }
  requestAnimationFrame(updateWaves);
}

requestAnimationFrame(updateWaves);
