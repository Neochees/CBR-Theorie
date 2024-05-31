console.log("Hoi");

fetchData();

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

function find_item(data) { };

function build(data) {
    random_factor = Math.floor(Math.random() * data.length);
    document.getElementById('questionImage').src = "./assets/img/" + data[random_factor]["image"]
    document.getElementById('question').src = "./assets/json/db.json" + data[random_factor]
};