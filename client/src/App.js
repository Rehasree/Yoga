import React,{useState,useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// REDUX Components
import {useDispatch} from 'react-redux'
import { getPosts  } from './actions/posts';
// JS Components
import Base from './Components/constants/Base/Base';
import Home from './Pages/Home/home'
import Anniversaries from './Pages/Anniversaries/Anniversaries'
import  Babybirthdays from './Pages/Birthdays/BabyBirthdays';
import Adultbirthdays from './Pages/Birthdays/AdultBirthDays';
import PostEvent  from './Pages/PostEvents/PostEvents';
import Authentication from './Pages/Auth/Auth';

function App() {
 const [currentID,setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[currentID,dispatch]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Base> 
              <Home/>
          </Base>
          </Route>
          <Route exact path="/anniversaries" >
          <Base> 
              <Anniversaries currentID={currentID} setCurrentId={setCurrentId}/>
          </Base>
          </Route>
          <Route exact path="/baby-birthdays">
          <Base> 
              <Babybirthdays  currentID={currentID} setCurrentId={setCurrentId}/>
          </Base>
          </Route>
          <Route exact path="/adult-birthdays">
          <Base> 
              <Adultbirthdays  currentID={currentID} setCurrentId={setCurrentId}/>
          </Base>
          </Route>
          <Route exact path="/post-events" >
          <Base> 
              <PostEvent currentID={currentID} setCurrentId={setCurrentId}/>
          </Base>
          </Route>
          <Route exact path="/auth">
              <Authentication/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
