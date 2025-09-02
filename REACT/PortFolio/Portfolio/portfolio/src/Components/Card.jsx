import {reviews} from "./data.jsx";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
function Card(){


    return(
        <div>
            <div>
                <img src={reviews[0].avatar} alt=""/>
            </div>
            {/*<div>*/}
            {/*    <p>{reviews.name}</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>{reviews.title}</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <FaQuoteLeft/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>{reviews.quote}</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <FaQuoteRight/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button>*/}
            {/*        +*/}
            {/*    </button>*/}
            {/*    <button>*/}
            {/*        -*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button>*/}
            {/*        Suprise Me*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}

export default Card;