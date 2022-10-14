import './styles/Destination.css';
import data from '../data.json';
import {Navbar} from '../components/Navbar';
import {useState} from 'react';
import Europa from '../assets/destination/image-europa.png';
import Mars from '../assets/destination/image-mars.png';
import Moon from '../assets/destination/image-moon.png'
import Titan from '../assets/destination/image-titan.png';

export const Destination = () =>
{

    const pageData = data.destinations;
    const [planetImage, setPlanetImage] = useState(Moon);
    const [planetName, setPlanetName] = useState(pageData[0].name);
    const [planetDescription, setPlanetDescription] = useState(pageData[0].description);
    const [planetDistance, setPlanetDistance] = useState(pageData[0].distance);
    const [planetTravel, setPlanetTravel] = useState(pageData[0].travel);

    const changePlanet = (planet) =>
    {
        const planetTabs = document.getElementById('tab-container').children
        let locator;
        for(let counter = 0; counter < planetTabs.length; counter++)
        {
            planetTabs[counter].classList.remove('active-planet')
            planetTabs[counter].classList.add('unactive-planet')
            if(planetTabs[counter].id === planet)
            {
                locator = counter;
                // BigO(1)
                switch(counter)
                {
                    case 0:

                        setPlanetImage(Moon);
                        break;
                    
                    case 1:
                        setPlanetImage(Mars);
                        break;

                    case 2:
                        setPlanetImage(Europa);
                        break;

                    case 3:
                        setPlanetImage(Titan)
                        break;
                    
                    default:
                        break;
                }
                setPlanetName(pageData[counter].name);
                setPlanetDescription(pageData[counter].description);
                setPlanetDistance(pageData[counter].distance);
                setPlanetTravel(pageData[counter].travel);
            }
        }
        planetTabs[locator].classList.remove('unactive-planet');
        planetTabs[locator].classList.add('active-planet');
    }


    return (
        <div 
        className="Destination"
        >
            <Navbar />
            <section 
            className="page"
            id="destination-page"
            >
                <div 
                className="desktop-left-flex-container"
                >
                    <p
                    className="header"
                    >
                        01 
                        <span
                        className="header-special-text"
                        >
                            PICK YOUR DESTINATION
                        </span>
                    </p>
                    <img 
                    alt="planet" 
                    className="planet"
                    src={planetImage} 
                    />
                </div>
                <div 
                className="desktop-right-flex-container"
                >
                    <div 
                    className="nav-container"
                    id="tab-container"
                    >
                        <p 
                        className="active-planet" 
                        id="moon"
                        onClick={() => changePlanet("moon")}
                        >
                            MOON
                        </p>
                        <p 
                        className="unactive-planet" 
                        id="mars"
                        onClick={() => changePlanet("mars")}
                        >
                            MARS
                        </p>
                        <p 
                        className="unactive-planet" 
                        id="europa"
                        onClick={() => changePlanet("europa")}
                        >
                            EUROPA
                        </p>
                        <p 
                        className="unactive-planet" 
                        id="titan"
                        onClick={() => changePlanet("titan")}
                        >
                            TITAN
                        </p>
                    </div>
                    <p 
                    className="planet-heading" 
                    >
                        {planetName}
                    </p>
                    <p 
                    className="planet-description" 
                    >   
                        {planetDescription}
                    </p>
                    <hr className="dividing-line" />
                    <div 
                    className="tablet-flex-container"
                    >
                        <div 
                        className="container"
                        >
                            <p 
                            className="header-2"
                            >
                                AVG. DISTANCE
                            </p>
                            <p 
                            className="distance" 
                            id="displayed-distance"
                            >
                                {planetDistance}
                            </p>
                        </div>
                        <div 
                        className="container"
                        >
                            <p 
                            className="header-3"
                            >
                                EST. TRAVEL TIME
                            </p>
                            <p 
                            className="travel-time" 
                            id="displayed-travel-time"
                            >
                                {planetTravel}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}