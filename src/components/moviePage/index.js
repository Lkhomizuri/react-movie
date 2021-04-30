import React, { Component }  from 'react';
import "./moviePage.css"

export default class MoviePage extends Component {
   state=
   {
       data:null,
       
   }
   componentDidMount()
   {
     fetch(`http://localhost:3000/allmovies/${this.props.id}`)
     .then(response => response.json())
     .then(movies =>
       {
         this.setState((state =>
           {
            state.data=movies;
            return state;
           }));
       });
       
       
   }
    
  
    render=()=> {
        let allmovies=this.state.data;
        
        if(allmovies==null)
        {
            return <div>Loading...</div>
        }
        else
        {
            console.log(allmovies.poster);
            return(
                
                <React.Fragment>
               <div className="row page">
                   <div className="col-md-4">
                      <img className="image" src={"/"+allmovies.poster} alt="poster"/>
                   </div>
                   <div className="col-md-8">
                     <h3 className="movieName">{allmovies.name}</h3>
                     <ul className="list-group">
                         <li className="list-group-item"><strong>ჟანრი: </strong>{allmovies.ganre}</li>
                         <li className="list-group-item"><strong>წელი: </strong>{allmovies.year}</li>
                         <li className="list-group-item"><strong>IMDB: </strong>{allmovies.imdb}</li>
                         <li className="list-group-item"><strong>აღწერა:<br/><br/></strong>{allmovies.desc}</li>
                         
                     </ul>
                   </div>

               </div>
               <div className="row">
                   <div className="moviePlayer">
                   <video className="col-12 col-md-9 col-sm-10 col player"controls="controls" >
                       <source src={allmovies.trailer}></source>
                   </video>
                   
                   </div>
                   
                   
               </div>
               
               </React.Fragment>
        
                )
                
            
           

        }
        
    }
}

