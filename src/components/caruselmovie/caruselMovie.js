import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./caruselmovie.css";

export default class CaruselMovie extends Component
{ 
  state=
  {
    movieCarusel:null
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/carusellMovie")
    .then(response => response.json())
    .then(data =>
      {
        this.setState((state=>{
          state.movieCarusel=data;
          return state;
        }));
      });
  }
 
  render()
  {
    let movies=this.state.movieCarusel;
    
    if(this.state.movieCarusel==null)
    {
      return <div>Loading...</div>
    }
    else
    {
      
      movies=movies.map((moviePoseter)=>
      {
        return(
          <Link to={`/page/`+moviePoseter.id} ><img class="testimonials-image" src={moviePoseter.poster} alt="dog-profile"/></Link>
          
          

        )
        

      })
    }

    return(
      
      <section id="carusel" >
      <div id="testimonials-carusel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner carusel-one">
          <div className="carousel-item active">
            {movies[0]}
          </div>
          <div className="carousel-item">
            {movies[1]}
          </div>
          <div className="carousel-item">
            {movies[2]}
          </div>
          <div className="carousel-item">
            {movies[3]}
          </div>
        </div>
        <a className="carousel-control-prev" href="#testimonials-carusel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          
        </a>
        <a className="carousel-control-next" href="#testimonials-carusel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          
        </a>
      </div>
      
    </section>
    

    );
  }
  
}
  
    



  
    



  
  
 