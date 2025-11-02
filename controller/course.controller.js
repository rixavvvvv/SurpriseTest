const course=require("../models/course.model");

module.exports.getACourse= async (req,res)=>
{
    const id=req.params;
    const course=course.findById(id)
    res.json.status(200).json(
        {
            success:true,
            data:course
        }
    );

};


module.exports.getCourses= async(req,res)=>
{
    const courses=course.find();

    res.status(200).json(
        {
            success:true,
            data:courses
        }
    );
};



module.exports.createCourses=async(req,res)=>
{
    const {title, duration, instructor}=req.body;

    const course=await course.createCourses({title, duration, instructor});

    res.status(200).json(
        {
            success:true,
            data:course
        }
    );
}

module.exports.updateCourse=async(req,res)=>
{
    const {title,duration,instructor}=req.body;
     const data={};

     if(title) data.title=title;
     if(duration) data.duration=duration;
     if(instructor) data.instructor;

     const course= await course.findByIdAndUpdate();


     res.status(200).json({
        success:true,
        data:course
     })


}

module.exports.deleteCourse= async (req,res)=>
{
    const id=req.params;
    const course=course.findByIdAndDelete(id);

    res.status(200).json({
        success:true,
        data:course
    });
}