// Os testes rodam sempre em inglês, independente do idioma da máquina
Object.defineProperty(navigator, 'languages', {
  value: ['en-US'],
  configurable: true
})
Object.defineProperty(navigator, 'language', {
  value: 'en-US',
  configurable: true
})
