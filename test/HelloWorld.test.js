const hellow = require('../src/HelloWorld.js').default

describe('Hellow', () => {

    it('Deve retornar Hellow', () => {
      const resultado = olaMundo()
  
      expect(resultado).toEqual("Hello World")
    })
  })