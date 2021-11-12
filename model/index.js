const mongoose = require('mongoose');
mongoose.connect('mongodb://30.37.82.41:27017/realworld', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//链接失败的时候
db.on('error', (err) => {
  console.log('数据库链接失败', err);
});

//链接成功的时候
db.once('open', function () {
  console.log('数据库链接成功');
});

//创建了一个模型
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
