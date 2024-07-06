import "../../variables.css"
import "./homePageWindow.css"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePageWindow() {
    return (

      <div className="outer-border">
        <div className="upper-line">
            <div className="cross"></div>
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