const mongoose = require('mongoose')

const {Schema} = mongoose

// 链接数据库
mongoose.connect('mongodb://localhost/itcast')

// 设计集合模式
// 约束的目的是为了保证数据的完整性，避免有脏数据

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String
    }

})

// mongoose.model 方法就是把一个架构发布为model
// 第一个参数 ： 传入一个大写名词单数字符串，生成小写复数的集合
// 第二个参数是架构
// 返回值，模型构造函数

const User = mongoose.model('User',userSchema)


// 新增
// let user= new User({
//     userName:'林俊杰',
//     password:'123456a',
//     email:'1234@qq.com'
// })

// user.save().catch(err=>{
//     console.log('存储失败',err)
// }).then(res=>{
//     // typeof res ==> Object
//     console.log('存储成功\r\n',res,typeof res)
// })

// 查询所有
// User.find((err,res)=>{
//     if(err){
//         console.log("查询失败")
//     }
//     else{
//         console.log('查询成功\r\n',res)
//     }
// })
// 按条件查询
// User.find({
//     userName:'周杰伦'
// },(err,res)=>{
//     if(err){
//         console.log("查询失败")
//     }
//     else{
//         console.log('查询成功\r\n',res)
//     }
// })

// 删除
// User.remove({
//     userName:"周杰伦"
// },(err,res)=>{
//     if(err){
//         console.log('删除失败\r\n',err)
//     }
//     else{
//         console.log('删除成功\r\n',res)
//     }
// })


// 更新数据
User.findByIdAndUpdate('602f7f8d66c5ef4264e12313',{
    password:'love520'
}).catch(err=>{
    console.log('更新失败\r\n',err)
}).then(res=>{
    console.log('更新成功\r\n',res)
}).finally(()=>{
    console.log('更新数据操作结束\r\n')
})