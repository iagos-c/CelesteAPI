'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Jogador extends Model {
    static getCamposJogador(){
        return [
            'posicao',
            'nome',
        ]
    }
}

module.exports = Jogador
