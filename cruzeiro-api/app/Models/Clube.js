'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Clube extends Model {
    static getCamposClube(){
        return [
            'nome',
            'fundacao',
            'estado',
        ]
    }
}

module.exports = Clube
