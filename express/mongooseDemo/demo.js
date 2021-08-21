const mongoose = require('mongoose');

// 链接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
/**
 * 创建一个模型
 * ==> 设计数据库
 * 
 */

// 集合名称
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个Cat 
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存kitty 实例
kitty.save().then(() => console.log('meow'));