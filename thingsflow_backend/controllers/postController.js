const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const util = require("../lib/util");
const postService = require("../services/postService");

module.exports = {
  /**
   * @전체게시글_조회하기
   * @route GET ~/post
   * @access public
   * @err
   */
  getAllPost: async (res, req) => {
    try {
      const result = await postService.getAllPost();

      return res
        .status(statusCode.OK)
        .send(
          util.success(statusCode.OK, responseMessage.READ_ALL_POST, result)
        );
    } catch (error) {
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR
          )
        );
    }
  },

  /**
   * @게시글_작성하기
   * @route POST ~/post
   * @access public
   * @err
   */
  createPost: async (res, req) => {
    try {
    } catch (error) {}
  },
};
