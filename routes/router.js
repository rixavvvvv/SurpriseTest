const router=require("express").Router();
const StudentRoutes=require("./user.routes");
const CourseRoutes=require("./course.routes");


app.use("/students", StudentRoutes);
app.use("/courses",CourseRoutes);

module.exports=router;