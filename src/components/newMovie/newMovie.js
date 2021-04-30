import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./newMovie.css";

export default class NewMovies extends Component
{ 
  state=
  {
    newMovie:null,
    movieId:null
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data =>
      {
        this.setState((state=>{
          state.newMovie=data;
          return state;
        }));
      });
  }
 
  render()
  {
    let newMovie=this.state.newMovie;
    
    if(this.state.newMovie==null)
    {
      return <div>Loading...</div>
    }
    else
    {
      
        newMovie=newMovie.map((movie)=>
      {
        return(
            <div className="col col-md-3 col-sm-6  movie-card" key={movie.id}>
                <ul>
                  <li className="item-a">
                    <div className="latest-box">
                      <div className="latest-b-img">
                      <Link to={`/page/`+movie.id} ><img src={movie.poster}  alt=""/></Link>
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
      
        <section id="new-movie">
            <div className="container">
            <div className="row movie">
              <h5>ფილმები ქართულად</h5>
              {newMovie}
             
            </div>
          </div>
          
        
       </section>
    

    );
  }
  
}