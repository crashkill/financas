"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// Define our schema using the GraphQL schema language
const typeDefs = `
    type User {
      id: Int!
      username: String!
      password: String
      email: String!
    }
    type Projeto {
      DSC_RELATORIO: String!
      DSC_VENDA: String!
      NOM_CLIENTE: String!
      DSC_LINHANEGOCIO: String!
      NOM_RESPONSAVEL_OPERACAO: String!
      NOM_RESPONSAVEL_DELIVERY: String!
      NOM_RESPONSAVEL_DEVENGADO: String!
      ID_HOMS: String!
      COD_PROJETO: String!
      NOM_PROJETO: String!
      DSC_FILIAL: String!
      INT_IMPOSTO: String!
      DSC_CONTA_RESUMO: String!
      DSC_DENOMINACAO_CONTA: String!
      ID_RECURSO: String!
      NOM_RECURSO: String!
      VALOR_LANCAMENTO: String!
      DAT_PERIODO: String!
      DSC_NATUREZA: String!
    }

    type Query {
      allUsers: [User]
      fetchUser(id: Int!): User
      allProjects: [Projeto]
    }
    type Mutation {
      login (email: String!, password: String!): String
      createUser (username: String!, email: String!, password: String!): User
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
