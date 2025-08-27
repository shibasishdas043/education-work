
function Card({id, image, name, country, population, removeTour}) {

    return (
        <div className={"Card"}>
            <img src={image} alt="Image" className={"image"}/>
            <div className={"tour-Info"}>
                <div className={"tour-Details"}>
                    <h4 className={"tour-Name"}>{name}</h4>
                    <h5 className={"country-Name"}>{country}</h5>
                </div>
                <div className={"population"}>
                    {population}
                </div>
            </div>
            <button className={"btn-Red"} onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    )
}

export default Card;