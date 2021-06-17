'use strict'

/*
|--------------------------------------------------------------------------
| JogadorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Jogador = use('App/Models/Jogador')

class JogadorSeeder {
  async run () {
    await Jogador.createMany([
      { posicao: 'Goleiro',
        nome: 'Fábio'},
    ])
  }
}

module.exports = JogadorSeeder
