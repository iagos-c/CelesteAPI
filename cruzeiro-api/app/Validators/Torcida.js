'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Torcida extends AbstractValidator{
  get rules () {
    return {
      // validation rules
      quantidade: 'integer|required|unique:torcidas|max:200',
    }
  }
}


module.exports = Torcida
