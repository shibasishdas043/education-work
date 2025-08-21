import "./Item.css"

function Item(props) {
    let itemName = props.name;
    return(
        <>
            <div className="Item">
                {itemName}
            </div>
        </>
    )
}

export default Item