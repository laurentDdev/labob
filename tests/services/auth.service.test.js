const chai = require('chai')
const db = require('../../models/index')
const authService = require("../../services/auth.service")
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const expect = chai.expect
const should = chai.should()
beforeEach(async () => {
    await db.sequelize.sync({ force: true})
})
describe('Auth services test', () => {



    describe('Register feature' ,  () => {

        it('register user', async function () {

            const user = {
                email: "test@test.com",
                pseudo: "power",
                password: "password"
            }

            const createdUser = await authService.create(user.email, user.pseudo, user.password)

            createdUser.should.be.an('object')
            createdUser.should.have.property('email').to.be.equal(user.email)
            createdUser.should.have.property('pseudo').to.be.equal(user.pseudo)

        });

        it ("register an existing user", async () => {


            const user = {
                email: "test@test.com",
                pseudo: "power",
                password: "password"
            }

            await authService.create(user.email, user.pseudo, user.password)

            await expect(authService.create(user.email, user.pseudo, user.password)).to.be.rejectedWith("Validation error");
        })


    })

})
