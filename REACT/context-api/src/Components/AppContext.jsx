import {useState} from "react";

const {createContext} = require("react");


export const AppContext = createContext(1);

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

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

    call()

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages
    };

    return <AppContext.Provider value = {value}
                                children = {children}/>
}

export default AppContextProvider