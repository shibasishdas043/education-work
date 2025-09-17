function Product({post}) {

    const selected = 0;


    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src = {post.image}
                     alt = "post.image"/>
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            <button>
                {
                    selected?(<p>Remove Item</p>):(<p>Add To Cart</p>)
                }
            </button>
        </div>
    )
}

export default Product;