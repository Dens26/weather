const key = "91653205-a9e0-41ce-a13b-1983d0d5766f"
const errorMessage = document.querySelector(".error-message");
const container = document.querySelector(".container");

async function getWeather() {
    errorMessage.textContent = ``;
    try {
        let query = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${key}`);
        if (!query.ok) {
            throw Error("Erreur " + query.status);
        }
        let result = await query.json();
        console.log(container);
        container.children[0].textContent = result.data.city;
        container.children[1].textContent = result.data.country;
        container.children[2].textContent = result.data.current.weather.tp + "°";
        container.children[3].src = `./icons/${result.data.current.weather.ic}.svg`;
    }
    catch (error) {
        errorMessage.textContent = `${error}`;
    }
}
getWeather();