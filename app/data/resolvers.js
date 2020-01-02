const User = use("App/Models/User");

const resolvers = {
  Query: {
    async allUsers() {
      const users = await User.all();
      return users.toJSON();
    }
  }
};
