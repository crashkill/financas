"use strict";

const User = use("App/Models/User");
const Projetos = use("App/Models/Projeto");

// Define resolvers
const resolvers = {
  Query: {
    // Fetch all users
    async allUsers() {
      const users = await User.all();
      return users.toJSON();
    },
    // Get a user by its ID
    async fetchUser(_, { id }) {
      const user = await User.find(id);
      return user.toJSON();
    },
    async Projects() {
      const projeto = await Projetos.all();
      return projeto.toJSON();
    },
    async fetchProject(_, { COD_PROJETO }) {
      const projeto = await Projetos.findBy("COD_PROJETO", COD_PROJETO);
      return projeto.toJSON();
    }
  },

  Mutation: {
    // Handles user login
    async login(_, { email, password }, { auth }) {
      const { token } = await auth.attempt(email, password);
      return token;
    },

    // Create new user
    async createUser(_, { username, email, password }) {
      return await User.create({ username, email, password });
    }
  }
};

module.exports = resolvers;
