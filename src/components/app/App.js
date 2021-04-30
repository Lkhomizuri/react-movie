import React,{Component} from "react";
import Header from "../header";
import CaruselMovie from "../caruselmovie";
import NewMovie from "../newMovie";
import TvShow from "../tvShow";
import Footer from "../footer";
import Movies from "../movies";
import Serials from "../serials";
import MoviePage from "../moviePage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

export default class App extends Component
{


  render()
  {
    
    return(
      <section id="equal-section">
        <Router>
        <Header/>
        <Route path="/" exact render={()=>{return(
          <React.Fragment>
           <CaruselMovie/>
          <NewMovie/>
          <TvShow/>
          </React.Fragment>
          
        ) }}/>
        <Route path="/movie" exact component={Movies}/>
        <Route path ="/serial" exact component={Serials}/>
         
            <Route exact path="/page/:id"  render ={({match})=>
            <MoviePage id={match.params.id}/>
            }></Route>
            <Footer/>
        </Router>
      </section>
      
      
    );

  }
}


