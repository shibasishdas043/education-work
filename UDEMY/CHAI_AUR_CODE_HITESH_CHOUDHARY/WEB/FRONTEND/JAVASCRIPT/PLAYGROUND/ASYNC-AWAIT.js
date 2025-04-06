// function fetchUserData() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve({name:"Chaicode", url:"https://chaicode.com"});
//         },3000)

//     })

// }

// async function getUserData() {

//     try {
//         console.log("fetching");
//         const userdata = await fetchUserData();
//         console.log("User Data: ", userdata);
//     } catch (error) {
//         console.log("Error Fetching !", error);
//     }
    
// }

// getUserData();



function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Commented");
        },2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Fetched Successful");
        },4000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching");
        // const x = await fetchPostData();
        // const y = await fetchCommentData();
        // console.log(x);
        // console.log(y);

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData(),]);
        console.log(postData);
        console.log(commentData);
        
        console.log("Fetch Complete !");
    } catch (error) {
        console.log("error !", error);
    }
}

getBlogData();


