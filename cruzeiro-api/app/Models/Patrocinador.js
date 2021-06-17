'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patrocinador extends Model {
    static getCamposPatrocinador(){
        return [
            'nome',
        ]
    }
}

module.exports = Patrocinador
