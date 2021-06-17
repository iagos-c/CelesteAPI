'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Jogador = use('App/Models/Jogador')

/**
 * Resourceful controller for interacting with jogadors
 */
class JogadorController {
  /**
   * Show a list of all jogadors.
   * GET jogadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Jogador.query().paginate()
  }

  /**
   * Create/save a new jogador.
   * POST jogadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposJogador = Jogador.getCamposJogador()
    const dados = request.only(camposJogador)

    return Jogador.create(dados);
  }

  /**
   * Display a single jogador.
   * GET jogadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Jogador.query().where('id', params.id).first()

  }

  /**
   * Update jogador details.
   * PUT or PATCH jogadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposJogador = Jogador.getCamposJogador()
    const dados = request.only(camposJogador)

    const jogador = await Jogador.findOrFail(params.id)
    jogador.merge(dados)
    await jogador.save()

    return jogador;
  }


  /**
   * Delete a jogador with id.
   * DELETE jogadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const jogador = await Jogador.findOrFail(params.id)
    jogador.delete()
  }
}

module.exports = JogadorController
