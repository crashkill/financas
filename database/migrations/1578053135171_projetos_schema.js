'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetosSchema extends Schema {
  up () {
    this.table('projetos', (table) => {
      // alter table
    })
  }

  down () {
    this.table('projetos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProjetosSchema
