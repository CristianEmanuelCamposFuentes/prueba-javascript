import {Selector} from 'testcafe';

fixture(`Casos de prueba de la funcion login`)
    .page`https://www.saucedemo.com/`

test(`Un usuario debe poder iniciar sesion correctamente`, async t =>{
    // Credenciales
    await t.typeText('#user-name', 'standard_user')
    // Password
    await t.typeText('#password', 'secret_sauce')
    // Click el loguear
    await t.click('#login-button')
    // Validar que el titulo exista
    await t.expect(Selector('title').withText('PRODUCTS').exists).ok()

})