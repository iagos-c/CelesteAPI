'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Titulo extends Model {
    static getCamposTitulo(){
        return [
            'nome',
            'quantidade',
        ]
    }
}

module.exports = Titulo
