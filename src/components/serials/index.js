import React,{Component} from "react";
import Searchbar from "../searchbar";
import {Link} from "react-router-dom";
import "./serials.css"


export default class Serials extends Component
{ 
  state=
  {
    data:null,
    finalSerials:null
  }
  componentDidMount()
  {
    fetch("http://localhost:3000/tvshow")
    .then(response => response.json())
    .then(dataSerials =>
      {
        this.setState((state=>{
          state.data=dataSerials;
          state.finalSerials=dataSerials;
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
          const filterData = this.state.data.filter((serials)=>
        {
          if(serials.desc.includes(value)|| serials.name.includes(value))return true;
          else return false;

        });
        state.finalSerials=filterData;
        return state.finalSerials;
        })
      }
      else
      {
          this.setState((state)=>
          {
              state.finalSerials = state.data;
              return state;
              
          })
      }
     
    }
    
      
    
  }
 
  render()
  {
    console.log(this.state.finalSerials);
    let serial=this.state.finalSerials;
    
    if(this.state.finalSerials==null)
    {
      return <div>Loading...</div>
    }
    else
    {
      
        serial=serial.map((serials)=>
      {
        return(
            <div className="col col-md-3 col-sm-6  movie-card" key={serials.id}>
                <ul>
                  <li className="item-a">
                    <div className="latest-box">
                      <div className="latest-b-img">
                      <Link to={`/page/`+serials.id} ><img src={serials.poster}  alt=""/></Link>
                      </div>
                      <div className="latest-b-text">
                        <strong>{serials.name}</strong>
                        <p>{serials.ganre}</p>
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
            <section id="new-serials">
            <div className="container">
            <div className="row serials">
                <Searchbar onSearchInput={this.onSearchInput}/>
                <ul class="nav justify-content-center">
                  <li className="nav-item genre-item">
                    <a className="nav-link active genre" aria-current="page" href="#">დრამა</a>
                  </li>
                 <li className="nav-item genre-item">
                    <a className="nav-link genre" href="#">მძაფრ-სიუჟეტიანი</a>
                 </li>
                 <li className="nav-item genre-item">
                    <a className="nav-link genre" href="#">თრილერი</a>
                 </li>
                 <li className="nav-item genre-item">
                   <a className="nav-link genre" href="#">საშინელებათა</a>
                 </li>
                 <li className="nav-item genre-item">
                   <a className="nav-link genre" href="#">კომედია</a>
                 </li>
  
                </ul>
              {serial}
            </div>
          </div>
          
        
       </section>
        </React.Fragment>
    

    );
    
  }
  
}