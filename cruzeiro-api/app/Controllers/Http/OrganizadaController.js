'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Organizada = use('App/Models/Organizada')

/**
 * Resourceful controller for interacting with organizadas
 */
class OrganizadaController {
  /**
   * Show a list of all organizadas.
   * GET organizadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Organizada.query().paginate()
  }

  /**
   * Create/save a new organizada.
   * POST organizadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const camposOrganizada = Organizada.getCamposOrganizada()
    const dados = request.only(camposOrganizada)

    return Organizada.create(dados);
  }

  /**
   * Display a single organizada.
   * GET organizadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Organizada.query().where('id', params.id).first()

  }

  /**
   * Update organizada details.
   * PUT or PATCH organizadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const camposOrganizada = Organizada.getCamposOrganizada()
    const dados = request.only(camposOrganizada)

    const organizada = await Organizada.findOrFail(params.id)
    organizada.merge(dados)
    await organizada.save()

    return organizada;
  }


  /**
   * Delete a organizada with id.
   * DELETE organizadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const organizada = await Organizada.findOrFail(params.id)
    organizada.delete()
  }
}

module.exports = OrganizadaController
