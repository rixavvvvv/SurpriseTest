const mongoose=require("mongoose");

const courseScehma=mongoose.Schema(
    {


    title:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },

    instructor:{
        type:String

    }

})




const course=mongoose.model("course", courseScehma);