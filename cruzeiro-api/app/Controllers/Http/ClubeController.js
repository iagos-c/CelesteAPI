'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Clube = use('App/Models/Clube')

/**
 * Resourceful controller for interacting with clubes
 */
class ClubeController {
  /**
   * Show a list of all clubes.
   * GET clubes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Clube.query().paginate()
  }

  /**
   * Create/save a new clube.
   * POST clubes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposClube = Clube.getCamposClube()
    const dados = request.only(camposClube)

    return Clube.create(dados);
  }

  /**
   * Display a single clube.
   * GET clubes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Clube.query().where('id', params.id).first()

  }

  /**
   * Update clube details.
   * PUT or PATCH clubes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposClube = Clube.getCamposClube()
    const dados = request.only(camposClube)

    const clube = await Clube.findOrFail(params.id)
    clube.merge(dados)
    await clube.save()

    return clube;
  }


  /**
   * Delete a clube with id.
   * DELETE clubes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const clube = await Clube.findOrFail(params.id)
    clube.delete()
  }
}

module.exports = ClubeController
