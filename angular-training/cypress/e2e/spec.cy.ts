
// cy.get('[data-cy=""]')


describe('Login funcionality', () => {


  it('login should not work', () => {
    cy.visit('http://localhost:4200/login')

      //LLenar el Formulario
    cy.get('[data-cy="email-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="password-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="login-button"]').should('be.visible').click()

  })


  it('login should work', () => {
    cy.visit('http://localhost:4200/login')

      //LLenar el Formulario
    cy.get('[data-cy="email-input"]').should('be.visible').type("elias@gmail.com")
    cy.get('[data-cy="password-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="login-button"]').should('be.visible').click()


    cy.get('app-home').should('exist')

  })

   
  it('register should not work', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('[data-cy="create_account-link"]').click()

      //LLenar el Formulario
    cy.get('[data-cy="emailRegister-input"]').should('be.visible').type("cypress")
    cy.get('[data-cy="passwordRegister-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="register-button"]').should('be.visible').click()


  })

 
  it('register should work', () => {
    cy.visit('http://localhost:4200/login')

    cy.get('[data-cy="create_account-link"]').click()

      //LLenar el Formulario
    cy.get('[data-cy="emailRegister-input"]').should('be.visible').type("cypress@gmail.com")
    cy.get('[data-cy="passwordRegister-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="register-button"]').should('be.visible').click()


  })



})

describe('Meals Products CRUD', () => {

  beforeEach('Login', () => {

    cy.visit('http://localhost:4200/login')
    //LLenar el Formulario
    cy.get('[data-cy="email-input"]').should('be.visible').type("elias@gmail.com")
    cy.get('[data-cy="password-input"]').should('be.visible').type("elias")
    cy.get('[data-cy="login-button"]').should('be.visible').click()

  })

  it('should exist the table with products', () => {
    cy.get('app-home').should('exist')
    cy.get('[data-cy="product-table"]').find('th').should('have.length.greaterThan', 0)
  })

  
  it('should exist the pagination buttons', () => {
    cy.get('[data-cy="buttons-container"]').find('button').should('have.length.greaterThan', 1)
  })

  it('should add a product', () => {
    // Obtener el boton 
    cy.get('[data-cy="add-button"]').click()

    //Llenar el formulario
    cy.get('[data-cy="name-input"]').should('be.visible').type("Cypress")
    cy.get('[data-cy="description-input"]').should('be.visible').type("Esta es una prueba con cypress para agregar")
    cy.get('[data-cy="price-input"]').should('be.visible').type("99")

    //Agregar un producto
    cy.get('[data-cy="addProduct-button"]').click()

  })

  it('should update a first product', () => {
    // Obtener el boton 
    cy.get('[data-cy="product-0"]').click()

    cy.wait(500)
    //Llenar el formulario
    cy.get('[data-cy="nameProduct-input"]').clear()
    cy.get('[data-cy="nameProduct-input"]').should('be.visible').type("UPDATED")


    cy.get('[data-cy="update-button"]').click()


  })

  it('should erase a second product', () => {
    // Obtener el boton 
    cy.get('[data-cy="product-1"]').click()
    cy.get('[data-cy="erase-button"]').click()


  })

})

