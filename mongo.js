const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testDatabase');
.then(()=>
    console.log("connection is successul"))
.catch(err=> console.error("could not connect to the server . err"))    

const courseSchema =  new mongoose.Schema({
        name : String,
        courseId : Number,
        Tutor : String,
        PublishStatus : Boolean
})

const   Course = mongoose.model('Course' ,courseSchema)

// async function createCourse (){
//     const course = new Course({
//         name :"course1",
//         courseId :3,
//         Tutor :'sahil',
//         PublishStatus : true
  //  })
    
    // const result = await course.save()

// }

async function getCourses (){
    const courses = await Course.find({Tutor : 'sahil'})
    console.log(courses);
}


// createCourse()
getCourses()

