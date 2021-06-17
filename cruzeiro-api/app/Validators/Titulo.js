'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Titulo extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      nome: 'required|unique:titulos|max:200',
      quantidade: 'integer|required|unique:titulos'
    }
  }
}


module.exports = Titulo
