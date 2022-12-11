import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    creatorName:String,
    googleId: String,
    name : String,
    date :String,
    age :Number,
    phone :String,
    Schedule:Number,
});

const postEvent = mongoose.model('PostEvent',postSchema);
export default postEvent;