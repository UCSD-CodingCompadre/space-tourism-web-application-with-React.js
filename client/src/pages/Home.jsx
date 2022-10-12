import './styles/Home.css';
import {Navbar} from '../components/Navbar';

export const Home = () =>
{
    return (
        <div 
        className="Home"
        >
            <Navbar />
            <section 
            className="page"
            >
                <div 
                className="text-container"
                >
                    <p 
                    className="text-1"
                    >
                        SO, YOU WANT TO TRAVEL TO
                    </p>
                    <p 
                    className="text-2"
                    >
                        SPACE
                    </p>
                    <p 
                    className="text-3"
                    >
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience
                    </p>
                </div>
                <div 
                className="explore-button"
                >
                    EXPLORE
                </div>
            </section>
        </div>
    )
}