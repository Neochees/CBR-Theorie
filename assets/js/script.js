console.log("Hoi");
const random_factor = Math.floor(Math.random() * 700);

const gooditems = [664, 734, 767, 833, 851, 913, 940, 1099, 1124, 1347, 1382, 619, 638, 654, 731, 759, 815, 823, 918, 921];

getData("http://localhost:3000/questions/"+ getRandomQuestion(gooditems))

fetchData();

function getRandomQuestion(arr){
    const randomIndex =  Math.floor(Math.random() * arr.length)
    return arr[randomIndex];
}
async function fetchData() {
    try {
        const url = "http://localhost:3000/questions";
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log('werkt');
        // find_item(data);
        build(data);
    } catch (error) {
        console.error("Error", error);
    }
}

function build(data) {
    random_factor = Math.floor(Math.random() * data.length);
    document.getElementById('questionImage').src = "./assets/img/" + data[random_factor]["image"]
    fetch("http://localhost:3000/questions").then(

    )
};

async function getData(url) {
    const response = await fetch(url);
    const question = await response.json();
    console.log(question)
    document.getElementById("text").innerHTML = question.question;
    document.getElementById("answerOne").innerHTML = question.options[0];
    document.getElementById("answerTwo").innerHTML = question.options[1];
    document.getElementById("questionImage").src = "./assets/img/"+question.image;
  }