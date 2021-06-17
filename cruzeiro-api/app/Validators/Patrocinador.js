'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Patrocinador extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      nome: 'required|unique:patrocinadors|max:200',
    }
  }
}

module.exports = Patrocinador
