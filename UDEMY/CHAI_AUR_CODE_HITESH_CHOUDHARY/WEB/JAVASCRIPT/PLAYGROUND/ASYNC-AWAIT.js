function fetchUserData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({name:"Chaicode", url:"https://chaicode.com"});
        },3000)

    })

}

async function getUserData() {

    try {
        console.log("fetching");
        const userdata = await fetchUserData();
        console.log("User Data: ", userdata);
    } catch (error) {
        console.log("Error Fetching !", error);
    }
    
}

getUserData();