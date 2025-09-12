import {useContext, useEffect, useState} from 'react'
import './App.css'
import Header from "./Components/Header.jsx";
import Blogs from "./Components/Blogs.jsx";
import Pagenation from "./Components/Pagenation.jsx";
import {AppContext} from "./Components/AppContext.jsx";

function App() {
    const {fetchBlogPosts} = useContext(AppContext);

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <div>
            <Header/>
            <Blogs/>
            <Pagenation/>
        </div>
    )
}

export default App
