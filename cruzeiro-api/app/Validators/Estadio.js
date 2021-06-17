'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Estadio extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      nome: 'required|unique:estadios|max:200',
      capacidade: 'integer|required|unique:estadios'
    }
  }
}

module.exports = Estadio
