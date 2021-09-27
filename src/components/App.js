import React from 'react';
import TravelCard from './functional/travelcard';
import { travels } from '../data/travels';
import './App.css';

const App = () => {
    const showAdditonal = (additional) => {
        const alertInformation = Object.entries(additional)
            .map(information => `${information[0]}: ${information[1]}`)
            .join('\n');
            alert(alertInformation)   
    }
    return (
        <center>
        <div className="wrapper" style={{width:'300px'}}>
            <h1>Travels</h1>
            {travels.map(travel => (
                 <TravelCard 
                    key={travel.name}
                    name={travel.name}
                    title={travel.title}
                    img={travel.img}
                    color={travel.color}
                    additional={travel.additional}
                    showAdditional={showAdditonal}
                />
            ))}
        </div>
        </center>
    )
}

export default App;