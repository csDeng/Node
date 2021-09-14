const mongoose = require('mongoose')
const { 
    UserSchema, 
    ArticlesSchema,
    TagsSchema,
    CategorySchema  
} = require('./models')

mongoose.connect('mongodb://127.0.0.1:27017/blog', 
{ 
    useNewUrlParser: true , 
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', UserSchema)
const Articles = mongoose.model('Articles', ArticlesSchema)
const Tags = mongoose.model('Tags', TagsSchema)
const Categories = mongoose.model('Categories', CategorySchema)
module.exports = {
    User,
    Articles,
    Tags,
    Categories
}