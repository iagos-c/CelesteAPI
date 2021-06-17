'use strict'

/*
|--------------------------------------------------------------------------
| TorcidaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Torcida = use('App/Models/Torcida')

class TorcidaSeeder {
  async run () {
    await Torcida.createMany([
      {quantidade: 9500000,},
    ])
  }
}

module.exports = TorcidaSeeder
