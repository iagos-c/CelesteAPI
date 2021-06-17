'use strict'

/*
|--------------------------------------------------------------------------
| GerenciaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Gerencia = use('App/Models/Gerencia')

class GerenciaSeeder {
  async run () {
    await Gerencia.createMany([
      {presidente: 'Sérgio Santos Rodrigues',
      diretores: 'José Dalai Rocha'},
    ])
  }
}

module.exports = GerenciaSeeder
