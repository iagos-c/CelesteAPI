'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Organizada extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      nome: 'required|unique:organizadas|max:150',
      quantidade: 'integer'
    }
  }
}

module.exports = Organizada
