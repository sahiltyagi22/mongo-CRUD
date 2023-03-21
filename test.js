const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testing')
.then(()=> console.log('database is up and working'))
.catch(err=> console.error("there has been an error" ,err))

// schema 

const newSchema = new mongoose.Schema({
    name : String,
    rollNo : Number,
    subject : String,
})

const studentDetails = mongoose.model('studentDetails' ,newSchema)

// async function studentFun(){
//     const student1 = new studentDetails ({
//         name :'sahil',
//         rollNo : 50,
//         subject :'backEnd'
//     })
    
//      const result =await student1.save()
//      console.log(result)
// }

// studentFun()

// query document

async function findcourse(){
    const details = await studentDetails.find({rollNo :{$gte :89}}).select({rollNo :1})
    console.log(details)
}
findcourse()

// update of CRUD 

async function update(id){
    let details = await studentDetails.findById(id)
    if (!details) return;

    details.name = "tygai"
    details.rollNo = 21

    let updatedDetails = await details.save()
    console.log(updatedDetails);
}

update('64193bca8968c0016554b700')
