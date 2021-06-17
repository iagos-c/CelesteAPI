'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Clube extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      nome: 'required|unique:clubes|max:200',
      fundacao: 'date',
      estado: 'required|unique:clubes|max:45'
    }
  }
}

module.exports = Clube
