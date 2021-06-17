'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gerencia extends Model {
    static getCamposGerencia(){
        return [
            'presidente',
            'diretores',
        ]
    }
}

module.exports = Gerencia
