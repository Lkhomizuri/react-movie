import React,{Component} from "react";
import {Link} from "react-router-dom";
import Searchbar from "../searchbar";
import "./movies.css";


export default class Movies extends Component
{ 
  state=
  {
    data:null,
    finalMovie:null
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(dataMovie =>
      {
        this.setState((state=>{
          state.data=dataMovie;
          state.finalMovie=dataMovie;
          return state;
        }));
      });
  }


  
  onSearchInput=(e)=>
  {
    
    if(this.state.data != null)
    {
      const value=e.target.value
      
      if(value.length >=3)
      {
        this.setState((state)=>
        {
          const filterData = this.state.data.filter((movie)=>
        {
          if(movie.desc.includes(value)|| movie.name.includes(value))return true;
          else return false;

        });
        state.finalMovie=filterData;
        return state.finalMovie;
        })
      }
      else
      {
          this.setState((state)=>
          {
              state.finalMovie = state.data;
              return state;
              
          })
      }
     
    }
   
    
      
    
  }
  
  render()
  {
    
    let movies=this.state.finalMovie;
    
    if(this.state.finalMovie==null)
    {
      return <div>Loading...</div>
    }
    else
    {
      
        movies=movies.map((movie)=>
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
      
        <React.Fragment>
            <section id="new-movie">
            <div className="container">
            <div className="row movie">
                <Searchbar onSearchInput={this.onSearchInput}/>
                <ul class="nav justify-content-center ">
                  <li className="nav-item genre-item">
                    <button className="nav-link genre" aria-current="page" >დრამა</button>
                  </li>
                 <li className="nav-item genre-item">
                    <button className="nav-link genre" >მძაფრ-სიუჟეტიანი</button>
                 </li>
                 <li className="nav-item genre-item">
                    <button className="nav-link genre">თრილერი</button>
                 </li>
                 <li className="nav-item genre-item">
                   <button className="nav-link genre" >საშინელებათა</button>
                 </li>
                 <li className="nav-item genre-item">
                   <button className="nav-link genre" >კომედია</button>
                 </li>
  
                </ul>
              {movies}
            </div>
          </div>
          
         
       </section>
       
        </React.Fragment>
     
    

    );
    
  }
  
}