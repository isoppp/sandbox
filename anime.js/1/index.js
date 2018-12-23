const DEFAULT = {
  loop: true
}
document.addEventListener('DOMContentLoaded', () => {
  anime({
    ...DEFAULT,
    targets: '#example1 .box',
    translateX: 250,
    duration: 2000,
    elasticity(el, i) {
      return (200 + i * 200)
    }
  })

  anime({
    ...DEFAULT,
    targets: '#example2 .box',
    opacity: .5,
    translateX: '240px',
    backgroundColor: '#ddd',
    borderRadius: '50%',
    easing: 'easeInOutQuad',
    duration: 2000,
    delay(el, i, l) {
      return i * 250
    }
  })

  anime({
    ...DEFAULT,
    targets: '#example3 .box',
    translateX: 250,
    scale: 2,
    rotate: '1turn',
    duration(el,i, l) {
      return 1000 + (i * 1000)
    }
  })

  anime({
    ...DEFAULT,
    targets: '#example4 .box',
    translateX: 250,
    scale: 2,
    rotate: '1turn',
    elasticity(el, i) {
      return (200 + i * 200)
    },
    delay(el, i, l) {
      return i * 50
    },
    duration(el,i, l) {
      return 750 + (i * 750)
    },
  })

})
