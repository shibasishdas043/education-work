import {FcLike} from "react-icons/fc";


function Card(props){
    const course = props.course;
    return(
        <div className="card">
            <div><img src={course.image.url} alt={course.image.alt}/></div>
            <div>
                <button><FcLike></FcLike></button>
            </div>
            <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
        </div>
    );
}

export default Card;