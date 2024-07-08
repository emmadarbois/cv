import "../../variables.css"
import "./homePageWindow.css"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function HomePageWindow() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (

      <div className="outer-border">
        <div className="upper-line">
                <FontAwesomeIcon icon={faXmark} className="x-mark-icon" onClick={handleClick} />
        </div>

        <div className="window-main-body">
            <div className="name">
                Emma Darbois
            </div>

            <div className="job-title">
                Ingénieur logiciel
            </div>

            <Button className="know-more-button btn-lg">En savoir plus</Button>
        </div>
    </div>
    );
  };