const URl =
  "https://298b0a71c0881dde04168323716f68e6298b0a71c0881dde04168323716f68e6";

let getFatcs = async () => {

    console.log("Getting Data ....");

    let response = await fetch(URl);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data[0].text);

}