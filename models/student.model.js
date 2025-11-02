const mongoose=require("mongoose");

const studentScehma=mongoose.Schema(
    {


    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },

    courseID:{
        type:Number

    }

})




const student=mongoose.model("student", studentScehma);