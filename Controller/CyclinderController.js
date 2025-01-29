const CyclinderData = require('../Schema/CyclinderSchema')


const createdata =async(req,res)=>{
    const {cyclinderType ,fullCyclinder,emptyCyclinder,delivery}=req.body;
 try{
    const createdata =  new CyclinderData({cyclinderType ,fullCyclinder,emptyCyclinder,delivery})
    await createdata.save()
    if(!createdata){
        return res.status(404).send("Cyclinder Entry Missing")
    }
    return res.status(201).send(createdata)
 }
 catch(err){
    return res.status(404).send(err.messgage)
 }
}

const getdata=async(req,res)=>{
    try{
     const getdata = await CyclinderData.find()
     if(!getdata){
        return res.status(404).send("Data Not Avaliable")
     }
     return res.status(200).send(getdata)
    
    }
    catch(err){
        return res.status(404).send(err.message)
    }
}

const updatedata=async(req,res)=>{
    try{
        // const {cyclinderType ,fullCyclinder,emptyCyclinder,delivery} =req.body
        const {id}=req.params
     const update =req.body
     const updatedata = await CyclinderData.findByIdAndUpdate(id ,update ,{
        new:"true",runValidator:"true"
     })
     res.status(201).send(updatedata)
    }
    catch(err){
        return res.status(404).send(err.message)
    }
}


const deletedata=async(req,res)=>{
    const {id}=req.params
    try{
     const getdata = await CyclinderData.findById(id)
     if(!getdata){
        return res.status(404).send("Already Deleted or Data not founded")

     }
     const deletedata = await CyclinderData.findByIdAndDelete(id)
     return res.status(200).send("Item Delete Successfully")
    
    }
    catch(err){
        return res.status(404).send(err.message)
    }
}


module.exports ={createdata,getdata,deletedata ,updatedata}