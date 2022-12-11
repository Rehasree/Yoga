import mongoose from 'mongoose';
import postEvent  from '../models/postEvents.js'
import express from 'express'

const router = express.Router();
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
    console.log("backenddata",post)
    const newPost = new postEvent({ ...post, creator: req.userId});
    console.log("backenddata2",newPost)
   try {
       await newPost.save();
       res.status(201).json(newPost)
   }catch (error) {
       res.status(409).json({message:error.message})
   }
}

export const updatePost = async(req,res)=>{
    const { id } = req.params; 
    console.log('id',id) 
    const post = req?.body;
    console.log('backend',post)
    const final = await postEvent.findByIdAndUpdate(id,post ,{new:true});
    console.log('backendfinal',final)
    res.status(200).json(final);
}

export const deletePost = async(req,res)=>{
    const { id } = req.params;  
    await postEvent.findByIdAndRemove(id);
    res.json({message:'Post deleted successfully'});
}

export const likePost = async(req,res)=>{
    const { id } = req.params; 
    if(!req.userId) return res.json({message:"User unauthenticaled"})
    const post = await postEvent.findById(id);
    const index = post.likes.findIndex((id)=>id===String(req.userId));

    if(index===-1){

        //like post
        post.likes.push(req.userId)
    }else{
       
        //dislike
        post.likes=post.likes.filter((id)=>id!==String(req.userId))

    }

    const updatedPost = await postEvent.findByIdAndUpdate( id,post,{ new:true } )
    res.json(updatedPost);
}

export default router;