describe('Register', () => {
    it('Register new account', () => {
        //step
        cy.visit('https://www.cermati.com/app/gabung') //akses halaman register
        cy.get('[id="email"]').type('drajat2610@gmail.com') //input email
        cy.get('[id="mobilePhone"]').type('081807078097') //input no hp
        cy.get('[id="password"]').type('P@ssw0rd!') //input password
        cy.get('[id="confirmPassword"]').type('P@ssw0rd!') //input confirm password
        cy.get('[id="firstName"]').type('Drajat') //input first name
        cy.get('[id="lastName"]').type('Pamuji') //input last name
        cy.get('[id="cityAndProvince"]').type('Jakarta Barat') //input kota
        cy.get('//*[@id="safe-area"]/div[2]/div[2]/div/div[6]/div[2]/div/button/div').click()
        cy.get('[id="terms-and-condition"]').click() //klik term and condition
        cy.get('[data-button-name="register-new"]').click() //klik button register

        //assertion
        cy.get('.header_2xOrt').should('have.text', 'Pilih Metode Verifikasi') // assert redirect to OTP page
    })
})