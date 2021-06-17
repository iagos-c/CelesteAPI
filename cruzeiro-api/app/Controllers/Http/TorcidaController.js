'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Torcida = use('App/Models/Torcida')

/**
 * Resourceful controller for interacting with torcidas
 */
class TorcidaController {
  /**
   * Show a list of all torcidas.
   * GET torcidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Torcida.query().paginate()
  }

  /**
   * Create/save a new torcida.
   * POST torcidas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposTorcida = Torcida.getCamposTorcida()
    const dados = request.only(camposTorcida)

    return Torcida.create(dados);
  }

  /**
   * Display a single torcida.
   * GET torcidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Torcida.query().where('id', params.id).first()

  }

  /**
   * Update torcida details.
   * PUT or PATCH torcidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposTorcida = Torcida.getCamposTorcida()
    const dados = request.only(camposTorcida)

    const torcida = await Torcida.findOrFail(params.id)
    torcida.merge(dados)
    await torcida.save()

    return torcida;
  }


  /**
   * Delete a torcida with id.
   * DELETE torcidas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const torcida = await Torcida.findOrFail(params.id)
    torcida.delete()
  }
}

module.exports = TorcidaController
