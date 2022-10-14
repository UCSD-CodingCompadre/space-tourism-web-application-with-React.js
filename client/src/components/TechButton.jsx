import './styles/TechButton.css';

export const TechButton = (props) =>
{

    const {buttonHandler, id, isSelected, value} = props;

    return(
        <div 
        className="TechButton"
        onClick={() => buttonHandler(id)}
        >
            <section
            className={isSelected ? "component-on" : "component-off"}
            >
                {value}
            </section>
        </div>
    )
}