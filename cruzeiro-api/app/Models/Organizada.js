'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Organizada extends Model {
    static getCamposOrganizada(){
        return [
            'nome',
            'quantidade',
        ]
    }
}


module.exports = Organizada
