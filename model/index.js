const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')
mongoose.connect(dbUrl);

const db = mongoose.connection;

//链接失败的时候
db.on('error', (err) => {
  console.log('数据库链接失败', err);
});

//链接成功的时候
db.once('open', function () {
  console.log('数据库链接成功');
});

