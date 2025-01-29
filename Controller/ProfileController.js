const Dealer = require("../Schema/DealerSchema")
const Profile = require('../Schema/ProfileSchema')
const Reseller = require('../Schema/ResellerSchema')

const add = async (req, res) => {  
    const { location, phone, shopname } = req.body;  
  
    try {  
     const UserId = req.user._id;

     const user = await Dealer.findById(UserId) || await Reseller.findById(UserId)
     if(!user)
     {
        return res.status(404).send("Invalid data")
     }
      const profiledata= new Profile({ location, phone, shopname });  
      await profiledata.save();  
      user.Profile.push(profiledata)
      await user.save()
      return res.status(201).send(user)
    } catch (err) {  
      console.error(err); 
      return res.status(500).send("Internal Server Error");  
    }  
  };

const get = async(req,res)=>{
    try{
     const user = await Profile.find()
   
     return res.status(201).send(user)
 
    }
    catch(err){
     return res.status(500).send("Internal Server Error")
    }
    
}



const update = async (req, res) => {  
  const { id } = req.params;  
  const updatedata = req.body;  

  try {  
    const UserId = req.user._id;  
    const user = await Dealer.findById(UserId) || await Reseller.findById(UserId);  
    
    if (!user) {  
      return res.status(404).send("User not found");  
    }  
    
    const updatedProfile = await Profile.findByIdAndUpdate(id, updatedata, {  
      new: true,   
      runValidators: true 
    });  
    
    if (!updatedProfile) {  
      return res.status(404).send("Profile not found");  
    }  

    const profileId = user.Profile[0];   
    
    if (profileId) {  
      user.Profile[0] = updatedProfile;   
      await user.save(); 
    }  

    return res.status(200).send(updatedProfile);  
  }   
  catch (err) {  
    console.error(err);  
    return res.status(500).send("Internal Server Error");  
  }  
};
module.exports = {add ,get ,update}   