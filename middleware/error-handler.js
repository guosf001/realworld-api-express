const util = require('util');

//错误处理中间件
module.exports = () => {
  return (error, req, res, next) => {
    res.status(500).json({
      err: util.format(error),
    });
  };
};
