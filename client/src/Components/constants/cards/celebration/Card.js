import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './styles.css'
const AnniversaryCard =(props,{setCurrentId})=>{
   const isCreator = props.isCreator;
   
    return(
        <div className="Anniversay" align="center">
           <div className="wrapper">
                <div className="profile">
                    <img src={props.img} className="thumbnail" alt=""/>
                    <h3 className="name">{props.name}</h3>
                    <p className="title">{props.eventType} : {props.eventStartDate}</p>
                    <p className="description">{props.desc}</p>
                  
                </div>    
            <div className="social-icons">
                <div className="icon">
                    <span  onClick={props.Like}><ThumbUpIcon fontSize="small" /></span>
                    <b><p>{props.likes} Likes</p></b>
                </div>
            {isCreator && 
                ( 
                <>
                <div className="icon">
                    <span onClick={props.Delete}><DeleteIcon fontSize="small" /></span>
                    <b><p>Delete</p></b>
                </div>
                <div className="icon" >
                    <span onClick={props.Update}><EditIcon fontSize="small" /></span>
                    
                    <b><p>Update</p></b>
                </div>
                </>
                )}
               
            </div>
                <p align="right">
                    <span className="moment" >{props.time}</span>
                    <span className="moment" >{props.phone}</span>
                    <span className="moment"> Created by: {props.creator} </span>
                </p>
            </div>
        </div>
    )
}
export default AnniversaryCard;