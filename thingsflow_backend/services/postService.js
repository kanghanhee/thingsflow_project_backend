const post = require("../entities/post");
const { AppDataSource } = require("../models/db");

module.exports = {
  getAllPost: async () => {
    const result = await AppDataSource.getRepository(post).find({
      order: { created_at: "DESC" },
    });
    return result;
  },
  createPost: async () => {},
};
