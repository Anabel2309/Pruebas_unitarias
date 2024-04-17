const esmayuscula = require('../utils/esmayusculas');
test("Verificar mayusculas",() => {
expect(esmayuscula("MADRID")).toBe(true);
})

test("Verificar NO mayuscula",() => {
expect(esmayuscula("madrid")).toBe(false);
})