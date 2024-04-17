const palindromo = require('../utils/palindromo');
test("Verificar AMOR",() => {
    expect(palindromo("amor")).toBe("roma");
})

test("Verificar HOLA",() => {
    expect(palindromo("HOLA")).toBe("ALOH");
})
