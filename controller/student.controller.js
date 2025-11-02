const student = require("../models/student.model");

module.exports.getAStudent = async (req, res) => {
    const id = req.params;
    const student = student.findById(id)
    res.json.status(200).json(
        {
            success: true,
            data: student
        }
    );

};


module.exports.getStudents = async (req, res) => {
    const students = student.find();

    res.status(200).json(
        {
            success: true,
            data: students
        }
    );
};



module.exports.createStudent = async (req, res) => {
    const { name, age, courseID } = req.body;

    const student = student.createStudent({ name, age, courseID });

    res.status(200).json(
        {
            success: true,
            data: student
        }
    );
}

module.exports.updateStudent=async(req,res)=>
{
    const {name,age,courseID}=req.body;

     //const student= {name,age,courseID}
     const data={};

     if(name) data.name=name;
     if(age) data.age=age;
     if(courseID) data.courseID;

     const student= await student.findByIdAndUpdate();


     res.status(200).json({
        success:true,
        data:student
     })


}