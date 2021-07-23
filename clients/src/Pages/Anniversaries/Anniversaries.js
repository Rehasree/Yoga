import React,{useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {Container,Row,Col} from 'react-bootstrap';
import {CircularProgress} from '@material-ui/core';
import moment from 'moment';
import AnniversaryCard from '../../Components/constants/cards/celebration/Card'
import { deletePost ,likePost } from '../../actions/posts';
const Anniversaries=({currentID,setCurrentId})=>{
    const posts = useSelector((state)=> state.posts);
    let isCreator=false;
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const currentUser=user?.result.givenName;
    
    const dispatch = useDispatch();
    console.log("Posts in posts",posts);
    return(
        <div> 
        {!posts.length ? <div align="center" style={{marginTop:"300px"}}> < CircularProgress /> </div>:(
            <Container>
                <h2 style={{margin:"20px"}} >Anniversaries</h2> 
                <Row>
                    {posts.filter(post=>post.eventType==="anniversary").map(post=>(
                       <Col xl={4} md={6}>
                        {(post.creator===currentUser)?(isCreator=true):(isCreator=false)}
                        <AnniversaryCard 
                        Update={()=>{ window.location.href = ('http://localhost:3000/post-events?id=' + post._id);}}
                        Delete={()=>{ dispatch(deletePost(post._id));}}
                        Like={()=>{
                            dispatch(likePost(post._id)) 
                            }}

                        id={post._id}
                        name={post.name} 
                        img={post.selectedFile} 
                        desc={post.message} 
                        eventType={post.eventType} 
                        likes={post.likeCount} 
                        eventStartDate={post.eventDate} 
                        time={moment(post.createdAt).fromNow()}
                        setCurrentId={setCurrentId}
                        phone={post.phone}
                        creator={post.creator}
                        isCreator={isCreator}
                        />
                   </Col> 
                    ))}
                    
                </Row>
            </Container>
        )}
        </div>
    )
}

export default Anniversaries;