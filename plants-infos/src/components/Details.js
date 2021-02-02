import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Details = (props) => {

    const  [plant,setPlants] = useState(null);
   

    const fetchData = async () => {
        let id  = props.match.params.id;
        
        const { data } = await axios.get(`https://601873f9971d850017a4004a.mockapi.io/plants/${id}`);
        setPlants(data);
      };

      useEffect(() => {
        
        fetchData();
      }, []);

    return ( 

        <div className="container details">

        {plant ? (
            <div className="post">  
            <h2 className="center mt-5">{plant.name}</h2>
            <p>{plant.info}</p> 
            <div className="plant-img">
            <img className="card" src={require(`../assets/img/${plant.img}.jpg`).default} alt=""/>

            </div>
            </div>) : 
            ( <dvi>Plant is growing...</dvi> )}
           
        </div>

     );
}
 
export default Details;