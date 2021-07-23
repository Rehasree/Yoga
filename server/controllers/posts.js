import mongoose from 'mongoose';
import postEvent  from '../models/postEvents.js'
export const  getPosts = async (req,res)=>{
    try {
       const postEvents = await postEvent.find(); 
       res.status(200).json(postEvents);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPosts=async (req,res)=>{
    const post = req.body;
    const newPost = new postEvent(post);
   try {
       await newPost.save();
       res.status(201).json(newPost)
   }catch (error) {
       res.status(409).json({message:error.message})
   }
}

export const updatePost = async(req,res)=>{
    const { id } = req.params;  
    const post = req.body;
    const final = await postEvent.findByIdAndUpdate({_id:id},{...post,id},{new:true});
    res.status(200).json(final);
}


export const deletePost = async(req,res)=>{
    const { id } = req.params;  
    await postEvent.findByIdAndRemove(id);
    res.json({message:'Post deleted successfully'});
}

export const likePost = async(req,res)=>{
    const { id } = req.params;  
    const post = await postEvent.findById(id);
    const updatedPost = await postEvent.findByIdAndUpdate( id,{ likeCount : post.likeCount+1 },{ new:true } )
    res.json(updatedPost);
}