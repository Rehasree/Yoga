import React from 'react'
import moment from "moment";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector} from 'react-redux';
import Fade from 'react-reveal/Fade';
import { Row,Container,Col} from 'react-bootstrap';
import './home.css'
import bday from './images/1.jpeg';
import adultbday from './images/2.jpeg';
import anniversary from './images/3.jpeg';
import about from './images/aboutUs.jpeg'
import Slider from "react-slick";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
const Home=()=>{
    var babyBirthdayToday=[];
    var adultsBirthdayToday=[];
    var anniversariesToday=[];
    var today = moment().format('YYYY-MM-DD')
    // Testimonials
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    const Data =[
        {name:"Reha",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Sam",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Sent",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Reha",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Sam",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Sent",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        {name:"Sent",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum enim eu nibh finibus "},
        
    ]
//    WINNER DESICION
const posts = useSelector((state)=> state.posts);
posts.map(post=>{
    if(post.eventDate===today && post.eventType==="babyBirthday"){
            babyBirthdayToday.push(post)
    }
    if(post.eventDate===today && post.eventType==="adultBirthday"){
        adultsBirthdayToday.push(post)
    }
    if(post.eventDate===today && post.eventType==="anniversary"){
        anniversariesToday.push(post)
    }
})
const babyWinner= babyBirthdayToday?.sort((a,b)=>b.likes.length-a.likes.length)[0];
const adultWinner = adultsBirthdayToday?.sort((a,b)=>b.likes.length-a.likes.length)[0];
const anniversaryWinner = anniversariesToday?.sort((a,b)=>b.likes.length-a.likes.length)[0];
console.log(posts)
    return(
        <div align="center">
            <Carousel>
                <div style={{height:"75vh"}} >
                    <img style={{height:"100%"}} src={bday} alt="img"/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div style={{height:"75vh"}}>
                    <img style={{height:"100%"}} src={adultbday} alt="img"/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div style={{height:"75vh"}}>
                    <img style={{height:"100%"}} src={anniversary} alt="img"/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
           
            <div className="about">
                <Container>
                <Fade clear>  
                    <Row >
                    <h2>About Us</h2><br/>
                        <Col xl={6} className="shadow-lg p-3 mb-5 bg-body rounded">
                            <img className="img-fluid" src={about} alt="about us"/>
                        </Col>
                        
                        <Col xl={6} >
                        
                            <p  className=" d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" >
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                            </p>
                        </Col>
                    </Row>
                    </Fade>
                </Container>
            </div> 
            <div className="testimonials">
                <Container>
                <h2>Testimonials</h2>
                <Slider {...settings}>
                {Data.map(testimonials=>{
                    return(
                    <div className="testimonials text-center">
                        <div align="center">
                        <div className="card border-light bg-light text-center">
                            <FormatQuoteIcon className="icon"/>
                            <div className="card-body blockquote">
                            <p className="card-text">{testimonials.desc}</p>
                            <footer className="blockquote-footer"><cite title="Source Title">{testimonials.name}</cite></footer>
                            </div>
                        </div>
                        </div>
                    </div>
                    )   
                })}
                </Slider>
                </Container>
            </div>
            <div className="Winners">
                <Container>
                    <h2>Winners of the day</h2>
                    <ul className="cards">
                     {babyWinner && ( <li>
                            <a href="/" className="card">
                            <img src={babyWinner?.selectedFile} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                <img className="card__thumb" src="https://t3.ftcdn.net/jpg/02/82/23/94/360_F_282239447_9JUkxLmUPzBvOrEAXVEx2GpNd1EkPOSO.jpg" alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title">{babyWinner?.name}</h3>            
                                    <span className="card__status">BABIES WINNER</span>
                                </div>
                                </div>
                                <p className="card__description">
                                    My heartiest congrats to the most devoted and dedicated competitor. Congrats and good luck with that!
                                </p>
                            </div>
                            </a>      
                        </li>)}   
                      {adultWinner &&(
                          <li>
                          <a href="/" className="card">
                          <img src={adultWinner.selectedFile} className="card__image" alt="" />
                          <div className="card__overlay">        
                              <div className="card__header">
                              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                              <img className="card__thumb" src="https://t3.ftcdn.net/jpg/02/82/23/94/360_F_282239447_9JUkxLmUPzBvOrEAXVEx2GpNd1EkPOSO.jpg" alt="" />
                              <div className="card__header-text">
                                  <h3 className="card__title">{adultWinner.name}</h3>
                                  <span className="card__status">ADULTS WINNER</span>
                              </div>
                              </div>
                              <p className="card__description">
                                    My heartiest congrats to the most devoted and dedicated competitor. Congrats and good luck with that!
                                </p>
                          </div>
                          </a>
                      </li>
                     
                      )} 
                       {anniversaryWinner &&(
                           <li>
                           <a href="/" className="card">
                           <img src={anniversaryWinner.selectedFile} className="card__image" alt="" />
                           <div className="card__overlay">
                               <div className="card__header">
                               <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
                               <img className="card__thumb" src="https://t3.ftcdn.net/jpg/02/82/23/94/360_F_282239447_9JUkxLmUPzBvOrEAXVEx2GpNd1EkPOSO.jpg" alt="" />
                               <div className="card__header-text">
                                   <h3 className="card__title">{anniversaryWinner.name}</h3>
                                   <span className="card__status">ANNIVERSARIES WINNER</span>
                               </div>          
                               </div>
                               <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                           </div>
                           </a>
                       </li>    
                  
                       )} 
                        
                    </ul>
                </Container>    
            </div>   
        </div>
    )
}

export default Home;