'use strict'

/*
|--------------------------------------------------------------------------
| OrganizadaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Organizada = use('App/Models/Organizada')

class OrganizadaSeeder {
  async run () {
    await Organizada.createMany([
      {nome: 'Máfia Azul',
      quantidade: 80000},
      {nome: 'Pavilhão Independente',
      quantidade: 40000},
      {nome: 'Cachazeiros',
      quantidade: 29500},
      {nome: 'Geral Celeste',
      quantidade: 11000},
      {nome: 'Torcida Fanati-Cruz',
      quantidade: 12500},
      {nome: 'China Azul',
      quantidade: 21000},
    ])
  }
}

module.exports = OrganizadaSeeder
