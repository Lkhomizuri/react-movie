import React,{Component} from "react";
import {Link} from "react-router-dom";

import "./tvShow.css";

export default class TvShowCarusel extends Component
{ 
  state=
  {
    tvShow:null
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/tvshow")
    .then(response => response.json())
    .then(data =>
      {
        this.setState((state=>{
          state.tvShow=data;
          return state;
        }));
      });
  }
 
  render()
  {
    let tvShowCarusel=this.state.tvShow;
    
    if(this.state.tvShow==null)
    {
      return <div>Loading...</div>
    }
    else
    {
      
      tvShowCarusel=tvShowCarusel.map((movie)=>
      {
        console.log(movie);
        return(
          <div className="col-md-3 " key={movie.id}>
          <ul>
          <li className="item-a">
            <div className="latest-box">
              <div className="latest-b-img">
                <Link to={`/page/`+movie.id} ><img src={movie.poster} alt=""/></Link>
                
              </div>
              <div className="latest-b-text">
                <strong>{movie.name}</strong>
                <p>{movie.ganre}</p>
              </div>
        
            </div>
          </li>
        </ul>
      </div>

        )
        

      })
    }

    return(
      
      <section id="new-tvshow">
      <h5>სერიალები ქართულად</h5>
      <div className="row">
       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" classname="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
           
         </div>
         <div className="carousel-inner carusel-two">
           <div className="carousel-item active">
             <div className="row">
            
           {tvShowCarusel}
         
        
             </div>
             
           </div>
           <div className="carousel-item">
             <div className="row">
               {tvShowCarusel}
          
            
         
             </div>
           </div>
           
         </div>
         <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
         </button>
       </div>
      </div>
 
    </section>
    

    );
  }
  
}