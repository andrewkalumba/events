//alert("hello")

const showContent = e => console.log(e.target.textContent)  // ("e" means event and you can replace it with anything) 

document.querySelector(".Porcupine").onclick = showContent;

const tagName = e => console.log(e.target.tagName)

document.querySelector(".panther").onclick = tagName; //document.querySelector(".panther").onclick = tagName => console.log(e.target.tagName)

window.onclick = e => console.log(e.target)

document.querySelector(".Penguin").onclick = (e) => console.log(e.target.textContent.toUpperCase())

window.onclick = e => console.log(e.target.textContent.toUpperCase())

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love Pelicans")
    }
}
document.querySelector(".Pelican").addEventListener("click", pelicanLove);

const birdLove = animal => console.log(`${animal} is a pretty one`);

document.querySelector(".parrot").addEventListener("click", e => birdLove(e.target.textContent)) // document.querySelector(".parrot").addEventListener("click", () => birdlove("parrot")
document.querySelector(".parrot").addEventListener("click", e => birdLove(e.target.textContent))

const notAntEater = () => console.log("I am not a Ant eater")
const notArmadillo = () => console.log("Iam not an Armadillo")

document.querySelector(".pangolin").onclick = notAntEater;
document.querySelector(".pangolin").onclick = notArmadillo;
//displays only one value i.e the last one (notArmadillo)

document.querySelector(".pangolin").addEventListener("click", notAntEater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo);
//displays everything i.e both values

//document.querySelector(".pangolin").addEventListener("click", notArmadillo, {once:true}); //displays the value only once

let x = document.querySelectorAll(".tab");
console.log(x)
let tabs = Array.from(x)

tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))

const bestAnimal = animal => {
    if (animal.toLowerCase() === "panther") {
        console.log(`${animal} is the jungle assassin`)
    } else {
        console.log(`${animal} is the best animal`);
    }
}
//console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best animal`);

let animaltabs = Array.from(document.querySelectorAll(".tab")); //puts the animals in the array 
animaltabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent))) //this is a function with a set of instruction to get bestAnimal and forEach acts as a loop 

console.log(animaltabs)


document.querySelector("footer p span").addEventListener("click", () => console.log("span"))

document.querySelector("footer").addEventListener("click", () => console.log("footer"), true)

document.querySelector("p").addEventListener("click", () => console.log("p"), true)

//animaltabs.forEach(tab => tab.addEventListener("click", () =>tab.classList.add("active")))

const setActive = (clickedTab) => {
    animaltabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active")
    document.querySelector(".page-title").textContent = clickedTab.textContent;

}

animaltabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

let searchInput = document.querySelector("#search")
document.querySelector("#search").addEventListener("input", () => console.log(searchInput.value)) //input event(console logs every time yountype in the search bar)

//document.querySelector("#search").addEventListener("change", () =>  console.log(searchInput.value)) //change event(console logs and displays in the console when you move the mouse)

const findTab = () => {
    animaltabs.forEach(tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add("active")
        } else {
            tab.classList.remove("active")
        }
    })
}
searchInput.addEventListener("input", findTab)

//searchInput.addEventListener("change", findTab)

let countries = ["Sweden", "Norway", "Denmark"];
countries.push("uganda")
console.log(countries)

let uganda = {
    name: "Uganda",
    capitalCity: "Kampala",
    language: "English",
    independence: 1962,
}
console.log(`${uganda.independence} is when ${uganda.name} gained its independence`)

/*document.querySelector(h1).textContent = "uganda"
document.querySelector(h1).innerHtml = ""*/

function Country(name, capitalCity, language, sport) {
    this.name = name,
        this.capitalCity = capitalCity,
        this.language = language,
        this.sport = sport
    //Description is a function that is declared inside an object
    this.description = () => console.log(`${this.name}'s favorite sport is ${this.sport}`) 
};


let Sweden = new Country("sweden", "stockholm", "svenska", "brandboll")
let Uganda = new Country("Uganda", "Kampala", "English", "football")
let Germany = new Country("germany", "berlin", "german", "football")
/*console.log(Sweden.capitalCity)
console.log(Uganda.sport)*/

let Countries = [Sweden, Uganda, Germany];

Countries.forEach(country => country.description())


