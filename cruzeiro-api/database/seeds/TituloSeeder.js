'use strict'

/*
|--------------------------------------------------------------------------
| TituloSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Titulo = use('App/Models/Titulo')

class TituloSeeder {
  async run () {
    await Titulo.createMany([
      {nome: 'Copa do Brasil',
      quantidade: 6},
      {nome: 'Copa Libertadores da América',
      quantidade: 2},
      {nome: 'Copa Sul-Americana',
      quantidade: 1},
      {nome: 'Campeonato Brasileiro',
      quantidade: 4},
      {nome: 'Tríplice Coroa',
      quantidade: 1},
      {nome: 'Melhor Clube Brasileiro do Século XX',
      quantidade: 1},
      {nome: 'Campeonato Mineiro',
      quantidade: 40},
    ])
  }
}


module.exports = TituloSeeder
