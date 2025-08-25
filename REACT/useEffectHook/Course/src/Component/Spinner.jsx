import {toast} from "react-toastify";
import "./Spinner.css";
const Spinner = () => {
    return(
        <div>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;