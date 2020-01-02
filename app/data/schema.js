"use strict";

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
    type Post {
      id: Int!
      title: String!
      slug: String!
      content: String!
      user: User!
    }

    type Query {
      allUsers: [User]
      fetchUser(id: Int!): User
    }
    type Mutation {
      login (email: String!, password: String!): String
      createUser (username: String!, email: String!, password: String!): User
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
