import './styles/Technology.css';
import data from '../data.json';
import {Navbar} from '../components/Navbar';
import {TechButton} from '../components/TechButton';
import {useState} from 'react'
import LaunchLandscape from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsuleLandscape from '../assets/technology/image-space-capsule-portrait.jpg';
import SpaceportLandscape from '../assets/technology/image-spaceport-portrait.jpg';
import LaunchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';

export const Technology = () =>
{
    const pageData = data.technology;
    const [landscape, setLandscape] = useState(LaunchLandscape);
    const [portrait, setPortrait] = useState(LaunchPortrait);
    const [techName, setTechName] = useState(pageData[0].name);
    const [techDescription, setTechDescription] = useState(pageData[0].description);
    const [techId, setTechId] = useState(0);

    const changeTech = (newId) =>
    {
        setTechId(newId);
        setTechName(pageData[newId].name);
        setTechDescription(pageData[newId].description);
        switch(newId)
        {
            case 0:
                setLandscape(LaunchLandscape);
                setPortrait(LaunchPortrait);
                break;
            
            case 1:
                setLandscape(SpaceportLandscape);
                setPortrait(SpaceportPortrait);
                break;

            case 2:
                setLandscape(SpaceCapsuleLandscape);
                setPortrait(SpaceCapsulePortrait);
                break;
            
            default: 
                break;
        }
    }

    return (
        <div 
        className="Technology"
        >
            <Navbar />
            <section 
            className="page"
            >
                <div 
                className="desktop-flex-container-1"
                >
                    <p 
                    className="header"
                    >
                        03
                        <span 
                        className="special-text"
                        >
                            SPACE LAUNCH 101
                        </span>
                    </p>
                    <img 
                    alt="tech-picture"
                    className='term-picture' 
                    src={landscape} 
                    />
                    <div 
                    className="flex-container"
                    >
                        <div 
                        className="nav-button-container"
                        >
                            <TechButton 
                            buttonHandler={changeTech}
                            id={0}
                            isSelected={techId === 0}
                            value={1}
                            />
                            <TechButton 
                            buttonHandler={changeTech}
                            id={1}
                            isSelected={techId === 1}
                            value={2}
                            />
                            <TechButton 
                            buttonHandler={changeTech}
                            id={2}
                            isSelected={techId === 2}
                            value={3}
                            />
                        </div>
                        <div 
                        className="container"
                        >
                            <p 
                            className="tech-header"
                            >
                                THE TERMINOLOGY...    
                            </p>
                            <p 
                            className="tech-name"
                            >
                                {techName}
                            </p>
                            <p 
                            className="tech-description"
                            >
                                {techDescription}
                            </p>
                        </div>    
                    </div>
                </div>
                <div 
                className="desktop-flex-container-2"
                >
                    <img 
                    alt="tech-picture" 
                    className="tech-portrait"
                    src={portrait} 
                    />
                </div>
            </section>
        </div>
    )
}