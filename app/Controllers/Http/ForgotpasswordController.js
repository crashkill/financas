'use strict'

const Crypto = require('crypto')
const User = use('App/Models/User')

class ForgotpasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = Crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Usuário não encontrado ou e-mail não cadastrado' } })
    }
  }
}

module.exports = ForgotpasswordController
