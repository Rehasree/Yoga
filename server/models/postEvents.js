import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    creator:String,
    creatorName: String,
    name : String,
    eventDate :String,
    message :String,
    phone :String,
    eventType:String,
    selectedFile : String,
    likes :{
        type:[String],
        default:[],
    },
    createdAt:{
        type : Date,
        default : new Date()
    }
});

const postEvent = mongoose.model('PostEvent',postSchema);
export default postEvent;