const chaveApi = "b556393f5d76d71a4f08d7a3021ba321";
const campoCidade = document.getElementById("campoCidade");
const botao = document.getElementById("botao");

const loc = document.getElementById('city');
const temp = document.querySelector('#temperatura span');
const icon = document.getElementById('weather-icon');
const desc = document.getElementById('descricao');
const umidade = document.querySelector('#umidade span');
const vento = document.querySelector('#vento span');

const getWeatherData = async(cidade) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chaveApi}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json()

    return data
}
const showWeatherData = async (cidade) => {
    const data = await getWeatherData(cidade);

    loc.innerText = data.name;
    if (data.name == undefined) {
        alert("Insira um local existente")
    }
    temp.innerText = parseInt(data.main.temp);
    umidade.innerText = data.main.humidity;
    desc.innerText = data.weather[0].description
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    vento.innerHTML = parseInt(data.wind.speed);
};

botao.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = campoCidade.value;

    showWeatherData(cidade);
})