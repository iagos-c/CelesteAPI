'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Gerencia = use('App/Models/Gerencia')

/**
 * Resourceful controller for interacting with gerencias
 */
class GerenciaController {
  /**
   * Show a list of all gerencias.
   * GET gerencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Gerencia.query().paginate()
  }

  /**
   * Create/save a new gerencia.
   * POST gerencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposGerencia = Gerencia.getCamposGerencia()
    const dados = request.only(camposGerencia)

    return Gerencia.create(dados);
  }

  /**
   * Display a single gerencia.
   * GET gerencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Gerencia.query().where('id', params.id).first()

  }

  /**
   * Update gerencia details.
   * PUT or PATCH gerencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposGerencia = Gerencia.getCamposGerencia()
    const dados = request.only(camposGerencia)

    const gerencia = await Gerencia.findOrFail(params.id)
    gerencia.merge(dados)
    await gerencia.save()

    return gerencia;
  }


  /**
   * Delete a gerencia with id.
   * DELETE gerencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const gerencia = await Gerencia.findOrFail(params.id)
    gerencia.delete()
  }
}

module.exports = GerenciaController
