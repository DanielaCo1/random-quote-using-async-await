async function getResponse() {
    const response = await fetch(
        'https://thatsthespir.it/api',
        {
            method: 'GET'
        }
    );
    return response.json();
}

let div = document.createElement("div");
div.classList.add("p");
let body = document.querySelector("body");
let photo = document.createElement("img");
let section = document.createElement("section");
section.classList.add("author");
let button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Next";
button.addEventListener("click", (e) =>{
    nextQuote()
})
body.appendChild(button);



function nextQuote(){
    getResponse().then(
        (response)=>{
        console.log(response)
        div.innerHTML = response.quote
        body.appendChild(div);
        if (response.photo ){
            photo.setAttribute("src",response.photo)
            body.appendChild(photo);
        }
        section.innerHTML = response.author
        body.appendChild(section);
        
        }
    ) 
}

nextQuote();

