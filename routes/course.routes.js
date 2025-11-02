const router=require("express").Router();

const controller=require("../controller/course.controller");

router.get("/courses", controller.getCourses);
router.get("/courses/:id",controller.getACourse);
router.post("/courses", controller.createCourses);
router.delete("/courses", controller.deleteCourse);

module.exports=router;