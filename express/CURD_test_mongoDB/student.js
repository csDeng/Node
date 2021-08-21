const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost/test',  { useNewUrlParser: true } )
const { Schema } = mongoose

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:Number,
        default:0,
        enum:[0,1]
    },
    age:{
        type:Number,
    }

})


module.exports =  mongoose.model("Student",studentSchema)