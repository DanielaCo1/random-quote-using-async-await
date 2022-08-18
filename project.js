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
button.innerHTML = "Next quote";
button.addEventListener("click", (e) =>{
    nextQuote()
})
body.appendChild(button);

// let age;
let authorFirstName = ""
let age
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
            let age
            // authorFirstName = response.author.split(" ")[0]
            // console.log(authorFirstName)
            console.log(getAge(response.author.split(" ")[0]))
            getAge(response.author.split(" ")[0]).then(function (agee){
                age = agee
                console.log(age)
                section.innerHTML = response.author + " " + age;
            }) 
            body.appendChild(section);
        
        }
    ) 
}
function getAge (name) {
    
let url = "https://api.agify.io/?name=" + name;
    
return fetch (url)
    .then((response) =>
    {
        return response.json()
    })
    .then((json) => {
        console.log(json.age);
        
        return json.age
    }) 
    .catch((error) => {
        console.log(error);
    })
}




nextQuote();
