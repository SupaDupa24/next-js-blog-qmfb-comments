export const particlesOptions = {
  fullScreen: {
  enable: true
},
detectRetina: true,
background: {
  color: "#000"
},
fpsLimit: 60,
emitters: {
  direction: "top",
  life: {
    count: 0,
    duration: 0.08,
    delay: 0.1
  },
  rate: {
    delay: 0.15,
    quantity: 1
  },
  size: {
    width: 100,
    height: 0
  },
  position: {
    y: 100,
    x: 50
  }
},
particles: {
  number: {
    value: 0
  },
  life: {
    count: 1
  },
  shape: {
    type: "line"
  },
  size: {
    value: 50,
    animation: {
      enable: true,
      sync: true,
      speed: 1,
      startValue: "max",
      destroy: "min"
    }
  },
  stroke: {
    color: {
      value: "#ffffff"
    },
    width: 1
  },
  rotate: {
    path: true,
    value: 180
  },
  move: {
    straight: true,
    enable: true,
    speed: { min: 10, max: 20 },
    outModes: {
      default: "destroy",
      top: "none"
    },
    trail: {
      fillColor: "#000",
      enable: true,
      length: 3
    }
  }
}
}