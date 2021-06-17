'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Gerencia extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      presidente: 'required|unique:gerencias|max:200',
      diretores: 'required|unique:gerencias|max:200'
    }
  }
}


module.exports = Gerencia
