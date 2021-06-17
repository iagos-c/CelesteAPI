'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Titulo = use('App/Models/Titulo')

/**
 * Resourceful controller for interacting with titulos
 */
class TituloController {
  /**
   * Show a list of all titulos.
   * GET titulos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Titulo.query().paginate()
  }

  /**
   * Create/save a new titulo.
   * POST titulos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposTitulo = Titulo.getCamposTitulo()
    const dados = request.only(camposTitulo)

    return Titulo.create(dados);
  }

  /**
   * Display a single titulo.
   * GET titulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Titulo.query().where('id', params.id).first()

  }

  /**
   * Update titulo details.
   * PUT or PATCH titulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposTitulo = Titulo.getCamposTitulo()
    const dados = request.only(camposTitulo)

    const titulo = await Titulo.findOrFail(params.id)
    titulo.merge(dados)
    await titulo.save()

    return titulo;
  }


  /**
   * Delete a titulo with id.
   * DELETE titulos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const titulo = await Titulo.findOrFail(params.id)
    titulo.delete()
  }
}

module.exports = TituloController
