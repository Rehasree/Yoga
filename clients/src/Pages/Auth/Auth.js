import React,{useState} from 'react';
import {GoogleLogin} from 'react-google-login';
import { Button } from '@material-ui/core';
import Icon from './icon';
import { AUTH } from '../../actions/ActionTypes';
import Input from '../../Components/constants/Inputs/Input';
import './Auth.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const Authentication= ()=>{
    const[isSignup,setISsignup]=useState(true)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
             dispatch({ type: AUTH, data: { result, token } });
             history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    
    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
    const switchmode=()=>{
        if(isSignup){
            setISsignup(false);
        }else{
            setISsignup(true);
        }
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">{isSignup? "Sign Up" :"Sign In"}</h5>
                                <form onSubmit={handleSubmit}>
                                    {isSignup &&(
                                    <>
                                         <Input type="text" name="firstname" id="inputfirstname" onChange={handleChange} placeholder="First name"/>
                                         <Input type="text" name="lastname" id="inputlastname" onChange={handleChange} placeholder="Last name"/>
                                    </>
                                    )}
                                         <Input type="email" name="email" id="inputemail" onChange={handleChange} placeholder="Email"/>
                                         <Input type="password" name="password" id="inputpassword" onChange={handleChange} placeholder="Password"/>
                                         
                                    {isSignup &&<Input type="password" name="re-password" id="inputrepassword" onChange={handleChange} placeholder="Re-type Password"/>}
                                    
                                    <button style={{background:"#c72583"}} className="btn btn-lg btn-block text-uppercase w-100"
                                        type="submit">{isSignup?'Sign Up':'Sign In'}
                                    </button>
                                    <br/>
                                   
                                    <br/>
                                    <GoogleLogin
                                        clientId="1014709244149-3q39c25jugjtj4urcr4rnii7ljb3uku1.apps.googleusercontent.com"
                                        render={(renderProps) => (
                                        <Button  color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                            Google Sign In
                                        </Button>
                                        )}
                                        onSuccess={googleSuccess}
                                        onFailure={googleError}
                                        cookiePolicy="single_host_origin"
                                    />
                                    <br/>
                                    <div align="center">
                                    </div>
                                </form> 
                                <div align="center" style={{marginTop:"30px"}} onClick={switchmode} >
                                        {isSignup?'Already have an acccount Sign-in':'New user? Sign up'}
                                        {/* <p>  Already signed up  <a href="/login">Sign-in</a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;