import {createContext, useContext, useState} from "react";


export const AppContext = createContext(1);

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    // const [author, setAuthor] = useState("");
    // const [catagory, setCatagory] = useState("null");
    // const [content, seContent] = useState("");
    // const [tags, setTags] = useState([]);
    // const [id, setId] = useState([]);

    //Data Filling
    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs"

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (e) {
            console.log("Error Fetching Data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChanges(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        // author,
        // setAuthor,
        // catagory,
        // setCatagory,
        // content,
        // seContent,
        // tags,
        // setTags,
        // id,
        // setId,
        handlePageChanges,
    };

    return <AppContext.Provider value = {value}
                                children = {children}/>
}

export default AppContextProvider