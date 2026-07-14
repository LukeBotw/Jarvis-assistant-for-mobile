/* ------------------------------------------------------------------
   Global styles – reset and layout
------------------------------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
  font-family: system-ui, sans-serif;
  background: #0a0a0a; /* dark backdrop */
  color: #f0f0f0;
  overflow: hidden;
}
#controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}
#controls button {
  background: rgba(255,255,255,0.1);
  border: 1px solid #333;
  color: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
#controls button:hover { background: rgba(255,255,255,0.2); }
#response {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  padding: 8px 12px;
  background: rgba(0,0,0,0.5);
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
}

/* ------------------------------------------------------------------
   Camera feed – hidden, but still receives stream
------------------------------------------------------------------- */
#camera-feed {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px);          /* optional: blur background */
  opacity: 0.3;               /* keep it visible but subtle */
  z-index: -1;                /* behind everything else */
}

/* ------------------------------------------------------------------
   Orb container – center everything
------------------------------------------------------------------- */
#orb-container {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ------------------------------------------------------------------
   Pulsing orb
------------------------------------------------------------------- */
#orb {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #00f, #004);
  box-shadow: 0 0 30px rgba(0,0,255,0.6);
  animation: pulse 2s infinite ease-in-out;
  z-index: 1;
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* ------------------------------------------------------------------
   Static blue ring around the orb
------------------------------------------------------------------- */
#orb-ring {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 4px solid rgba(0,0,255,0.3);
  z-index: 0;
}

/* ------------------------------------------------------------------
   Particle canvas – full screen, behind orb but above video
------------------------------------------------------------------- */
#particle-canvas {
  position: absolute;
  inset: 0;
  z-index: -2; /* behind orb but above the camera feed */
  pointer-events: none; /* let clicks pass through */
}
