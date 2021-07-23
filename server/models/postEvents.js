import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    creator:String,
    name : String,
    eventDate :String,
    message :String,
    phone :String,
    eventType:String,
    selectedFile : String,
    likeCount :{
        type:Number,
        default:0
    },
    createdAt:{
        type : Date,
        default : new Date()
    }
});

const postEvent = mongoose.model('PostEvent',postSchema);
export default postEvent;