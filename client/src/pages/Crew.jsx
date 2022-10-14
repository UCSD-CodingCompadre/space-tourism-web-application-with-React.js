import './styles/Crew.css';
import data from '../data.json';
import {DestinationRadioButton} from '../components/DestinationRadioButton';
import {Navbar} from '../components/Navbar';
import {useState} from 'react';
import Anousheh from '../assets/crew/image-anousheh-ansari.png';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';


export const Crew = () =>
{

    const pageData = data.crew;
    const [memberPortrait, setMemberPortrait] = useState(Douglas);
    const [memberName, setMemberName] = useState(pageData[0].name)
    const [memberRole, setMemberRole] = useState(pageData[0].role)
    const [memberBio, setMemberBio] = useState(pageData[0].bio)
    const [memberId, setMemberId] = useState(0);

    const changeMember = (newId) => 
    {
        setMemberId(newId);
        setMemberBio(pageData[newId].bio);
        setMemberRole(pageData[newId].role);
        setMemberName(pageData[newId].name)
        switch(newId)
        {
            case 0:
                setMemberPortrait(Douglas);
                break;
            
            case 1: 
                setMemberPortrait(Mark);
                break;
            
            case 2:
                setMemberPortrait(Victor);
                break;

            case 3:
                setMemberPortrait(Anousheh);
                break;
            
            default:
                break;
        }
    }
    

    return (
        <div 
        className="Crew"
        >
            <Navbar />
            <section 
            className="tablet-and-desktop-page"
            >
                <div 
                className="flex-container-1"
                >
                    <p 
                    className="header-1"
                    >
                        02 
                        <span 
                        className="special-text"
                        >
                            MEET YOUR CREW    
                        </span> 
                    </p>
                    <p 
                    className="member-role"
                    >
                        {memberRole}
                    </p>
                    <p 
                    className="member-name"
                    >
                        {memberName}
                    </p>
                    <p 
                    className="member-bio"
                    >
                        {memberBio}
                    </p>
                    <div 
                    id="radio-flex-container-tablet-and-desktop"
                    >
                        <DestinationRadioButton
                        id={0} 
                        isOn={memberId === 0}
                        radioHandler={changeMember}
                        />
                        <DestinationRadioButton 
                        id={1} 
                        isOn={memberId === 1}
                        radioHandler={changeMember}
                        />
                        <DestinationRadioButton 
                        id={2}
                        isOn={memberId === 2}
                        radioHandler={changeMember}
                        />
                        <DestinationRadioButton 
                        id={3}
                        isOn={memberId === 3}
                        radioHandler={changeMember}
                        />
                    </div>
                </div>
                <div 
                className="flex-container-2"
                >
                    <img 
                    alt="crew-member" 
                    className="crew-member-picture" 
                    src={memberPortrait}
                    />
                </div>
            </section>
            <section 
            className="mobile-page"
            >
                <p 
                className="header-1"
                >
                    02 
                    <span 
                    className="special-text"
                    >
                        MEET YOUR CREW    
                    </span> 
                </p>
                <img 
                alt="crew-member" 
                className="crew-member-picture" 
                id="crew-member-mobile" 
                src={memberPortrait} 
                />
                <div 
                id="radio-flex-container-mobile"
                >
                    <DestinationRadioButton
                    id={0} 
                    isOn={memberId === 0}
                    radioHandler={changeMember}
                    />
                    <DestinationRadioButton 
                    id={1} 
                    isOn={memberId === 1}
                    radioHandler={changeMember}
                    />
                    <DestinationRadioButton 
                    id={2}
                    isOn={memberId === 2}
                    radioHandler={changeMember}
                    />
                    <DestinationRadioButton 
                    id={3}
                    isOn={memberId === 3}
                    radioHandler={changeMember}
                    />
                </div>
                <p 
                className="member-role"
                >
                    {memberRole}
                </p>
                <p 
                className="member-name"
                >
                    {memberName}
                </p>
                <p 
                className="member-bio"
                >
                    {memberBio}
                </p>
            </section>
        </div>
    )
}