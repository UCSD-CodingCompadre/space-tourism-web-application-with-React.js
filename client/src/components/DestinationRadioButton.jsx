import './styles/DestinationRadioButton.css';

export const DestinationRadioButton = (props) =>
{

    const {id, isOn, radioHandler} = props;

    return (
        <div 
        className="DestinationRadioButton"
        onClick={() => radioHandler(id)}
        >
            <section 
            className={isOn ? "component-on" : "component-off"}
            >

            </section>
        </div>
    )
}