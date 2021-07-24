import React,{ useState, useEffect }  from 'react';
import { useLocation} from 'react-router-dom';
import { Card,Row,Col ,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {createPost,updatePost} from '../../actions/posts'
import './styles.css'
import { Container } from 'react-bootstrap';

function subStrAfterChars(str, char, pos)
{
if(pos==='b')
    return str.substring(str.indexOf(char) + 1);
else
return str;  
}
const PostEvent=({ currentID, setCurrentId })=>{
    const user=(JSON.parse(localStorage.getItem('profile')))
    let query = useLocation().search;
    let id = subStrAfterChars(query, '=','b')
    setCurrentId(id);
    const post = useSelector((state)=> currentID ? state.posts.find((p)=>p._id===currentID):null);
    const [postData, setPostData] = useState({ name: '', eventDate: '', message: '', phone: '',eventType:' ', selectedFile: '' });
    const dispatch = useDispatch();
    const classes = useStyles();  

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]); 
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentID) {
        dispatch(createPost({...postData,creatorName:user?.result.name})); 
    } else {
        dispatch(updatePost(currentID, {postData,creatorName:user?.result.name}));        
    }
    window.location.href = ('http://localhost:3000/');
    };
    if(!user){
        return(
        <div  style={{marginTop:"200px"}} >
            <h3 align="center">Please signin to create your auth memories</h3>
        </div>
        )
    }
    return(
        <div className="event-form ">
            <Container>
            <Card className="shadow p-3 mb-5 bg-white rounded" >
            <h2 align="center"> {currentID ? `Edit` : 'Post'} your Celebrations</h2>
                <br/>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>  
            <Row>
                <Col sm={6}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="name" id="floatingInput" placeholder="Reha" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
                    <label for="floatingInput">Name</label>
                </div>
                </Col>
                <Col>
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" name="eventDate" id="floatingInput" value={postData.eventDate} onChange={(e) => setPostData({ ...postData, eventDate: e.target.value })}/>
                    <label for="floatingInput">Event Date</label>
                </div>
                </Col>
            </Row>
           <Row>
               <Col>
               <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}} value={postData.message} onChange={(e) => setPostData({ ...postData,message: e.target.value })}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
               </Col>
           </Row>
           <br/>
           <Row>
           <Col>
           <div className="form-floating mb-3">
                    <input type="tel" className="form-control" name="phone" id="floatingInput" value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
                    <label for="floatingInput">Mobile number</label>
                </div>
            </Col>
            <Col>
            <select className="form-control form-control-lg" name="eventType" value={postData.eventType} onChange={(e) => setPostData({ ...postData, eventType: e.target.value })} >
                <option value="" >Event type</option>
                <option value="anniversary">Anniversary</option>
                <option value="adultBirthday">Adult Birthday</option>
                <option value="babyBirthday">Baby Birthday</option>
            </select>
            </Col>
           </Row>
           <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
           <Row>
               <Col>
                    <Button className="btn btn-info w-100"  size="large" type="submit" fullWidth>Submit</Button>
               </Col>
               <Col>
                <Button className="btn btn-danger w-100"fullWidth>Clear</Button>
               </Col>
           </Row>
            </form>
            
            </Card>
            </Container>
        </div>
    )
}
export default PostEvent;