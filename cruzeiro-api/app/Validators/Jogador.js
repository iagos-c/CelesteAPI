'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Jogador extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      posicao: 'required|unique:jogadors|max:200',
      nome: 'required|unique:jogadors|max:200'
    }
  }
}


module.exports = Jogador
