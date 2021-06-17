'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'CelesteAPI v1.0' }
})

Route.post('/users', 'UserController.store').prefix('api/v1')
Route.post('/users/token', 'UserController.token').prefix('api/v1')


Route.group(()=>{

  Route.resource('/clubes', 'ClubeController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Clube']
    ])),
  Route.resource('/estadios', 'EstadioController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Estadio']
    ])),
  Route.resource('/gerencias', 'GerenciaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Gerencia']
    ])),
  Route.resource('/jogadors', 'JogadorController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Jogador']
    ])),
  Route.resource('/organizadas', 'OrganizadaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Organizada']
    ])),
  Route.resource('/patrocinadors', 'PatrocinadorController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Patrocinador']
    ])),
  Route.resource('/titulos', 'TituloController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Titulo']
    ])),
  Route.resource('/storcidas', 'TorcidaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Torcida']
    ]))

}).middleware('auth').prefix('api/v1')
