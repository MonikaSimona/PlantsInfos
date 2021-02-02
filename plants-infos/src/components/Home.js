import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Plant from '../assets/img/plant.png'

const Home = () => {
    const  [plants,setPlants] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get('https://601873f9971d850017a4004a.mockapi.io/plants');
        setPlants(data);
      };

      useEffect(() => {
        fetchData();
      }, []);


      
    return (
        
        <div className="container home">
            <h2 className="center mt-4 mb-3">The Garden</h2>
            {plants.length ? (plants.map(plant => (
                <Link className="no-link"  to={`details/${plant.id}`}>
                <div className="post card" key={plant.id}>
                <img src={Plant} alt="plant" height="200px" width="200px"/>
                    <div className="card-content">
                        <h3 className=" green-text font ">{plant.name}</h3>
                        <p className="black-text">{plant.info}</p>
                    </div>
                </div>
                </Link>
            ))) : (
          <div className="center">
          No plants yet.
          </div>
      )}
            
        </div>
    );
}

export default Home;