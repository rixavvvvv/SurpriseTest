const router=require("express").Router();

const controller=require("../controller/student.controller");

router.get("/api/students", controller.getAStudent);
router.get("/api/students/:id",controller.getStudents);
router.post("/api/students", controller.createStudent);
//router.delete("/api/students", controller.deleteStudent);

module.exports=router;