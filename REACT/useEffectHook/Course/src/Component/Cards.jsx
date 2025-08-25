import {useState} from "react";
import {useEffect} from "react";
import Card from "./Card.jsx";

function Cards({courses}) {
    if (!courses || typeof courses !== 'object') return null;

    // let courses = props.courses;

    // console.log("printing Data");
    // console.log(courses);


    const getCourses = () => {
        let allCourses = [];
        Object.value(courses).forEach((array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        });
        return allCourses;
    }

    return (
        <div className="cards">
            {getCourses().map((course) => {
                return (<Card key={course.id} course={course}/>);
            })}
        </div>
    );
}

export default Cards;