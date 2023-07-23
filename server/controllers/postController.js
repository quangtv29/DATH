const Post = require('../models/postModel');

const createPost = async(req,res)=>{
    try{

        const post = new Post({
            MaSP:req.body.MaSP,
            TenSP:req.body.TenSP,
            Image:req.file.filename
        })
        const postData = await post.save();

        res.status(200).send({success:true,msg:'Post Data', data:postData});
    }catch(error){
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports = {
    createPost
}