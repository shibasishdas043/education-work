function Card({post}) {

    return (
        <div>
            <div>
                <h5>{post.title}</h5>
            </div>

            <div>
                <p>
                    By <span>{post.author}</span> On <span>{post.catagory}</span>
                </p>
                <p>{post.date}</p>
            </div>
            <div>
                <p>{post.content}</p>
            </div>
            <div>
                {
                    post.tags.map((tag, index) => {
                        return <span key = {index}>{`#${tag}`}</span>
                    })
                }
            </div>

        </div>
    )
}

export default Card