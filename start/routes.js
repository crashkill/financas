"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

const GraphqlAdonis = use("ApolloServer");
const schema = require("../app/data/schema");

Route.route(
  "/graphql",
  ({ request, response, auth }) => {
    return GraphqlAdonis.graphql(
      {
        schema,
        context: { auth }
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);

Route.get("/graphiql", ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: "/graphql" }, request, response);
});
