//Check It Its Button Or Not
let t = [];
list.addEventListener("click",(event) => {
    if (event.target.tagName === "BUTTON"){
        const x = parseInt(event.target.getAttribute("data-id"));
        t = t.filter(iterator => iterator.id !== x);
    }
})