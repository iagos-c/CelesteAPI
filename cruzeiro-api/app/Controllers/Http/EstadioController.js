'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Estadio = use('App/Models/Estadio')

/**
 * Resourceful controller for interacting with estadios
 */
class EstadioController {
  /**
   * Show a list of all estadios.
   * GET estadios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Estadio.query().paginate()
  }

  /**
   * Create/save a new estadio.
   * POST estadios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposEstadio = Estadio.getCamposEstadio()
    const dados = request.only(camposEstadio)

    return Estadio.create(dados);
  }

  /**
   * Display a single estadio.
   * GET estadios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Estadio.query().where('id', params.id).first()

  }

  /**
   * Update estadio details.
   * PUT or PATCH estadios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposEstadio = Estadio.getCamposEstadio()
    const dados = request.only(camposEstadio)

    const estadio = await Estadio.findOrFail(params.id)
    estadio.merge(dados)
    await estadio.save()

    return estadio;
  }


  /**
   * Delete a estadio with id.
   * DELETE estadios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const estadio = await Estadio.findOrFail(params.id)
    estadio.delete()
  }
}

module.exports = EstadioController
