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
      const { title, content, password } = req.body;
      if (!title || !content || !password) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
      }

      if (title.length > 20 || content.length > 200) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.CREATE_POST_FAIL)
          );
      }

      await postService.createPost(title, content, password);

      return res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.CREATE_POST_SUCCESS));
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
};
