'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Patrocinador = use('App/Models/Patrocinador')

/**
 * Resourceful controller for interacting with patrocinadors
 */
class PatrocinadorController {
  /**
   * Show a list of all patrocinadors.
   * GET patrocinadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Patrocinador.query().paginate()
  }

  /**
   * Create/save a new patrocinador.
   * POST patrocinadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposPatrocinador = Patrocinador.getCamposPatrocinador()
    const dados = request.only(camposPatrocinador)

    return Patrocinador.create(dados);
  }

  /**
   * Display a single patrocinador.
   * GET patrocinadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Patrocinador.query().where('id', params.id).first()

  }

  /**
   * Update patrocinador details.
   * PUT or PATCH patrocinadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposPatrocinador = Patrocinador.getCamposPatrocinador()
    const dados = request.only(camposPatrocinador)

    const patrocinador = await Patrocinador.findOrFail(params.id)
    patrocinador.merge(dados)
    await patrocinador.save()

    return patrocinador;
  }


  /**
   * Delete a patrocinador with id.
   * DELETE patrocinadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const patrocinador = await Patrocinador.findOrFail(params.id)
    patrocinador.delete()
  }
}

module.exports = PatrocinadorController
