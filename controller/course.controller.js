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

    const course=course.Create({title, duration, instructor});

    res.status(200).json(
        {
            success:true,
            data:course
        }
    );
}

/* module.exports.updateStudent=async(req,res)=>
{
    const {name,age,courseID}=req.body;


} */

module.exports.deleteCourse= async (req,res)=>
{
    const id=req.params;
    const course=course.findByIdAndDelete(id);

    res.status(200).json({
        success:true,
        data:course
    });
}