const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => showData(data))
        .catch((err) => {
            console.log(err);
        })
}

const showData = (data) => {
    // console.log(data.slice(0, 5));
    for(let singledata of data){
    // console.log(singledata.title);
        const container = document.getElementById("post-info");
        const div = document.createElement("div");
        div.innerHTML = `
        <h1 class="text-3xl text-center">${singledata.title}</h1>
        `;
        container.appendChild(div);
    }
}



loadData();