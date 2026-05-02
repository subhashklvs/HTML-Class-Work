async function getData(e) {
    e.preventDefault();
    let loadingElem=document.getElementById("loading");
    let textBoxElem = document.getElementById("textBox");
    let city = textBoxElem.value;
    let API = `https://api.weatherapi.com/v1/current.json?key=5e3735215ea54e8ea2973339260105&q=${city}`;
    if (city == "") {
        alert("please enter city name");
        return;
    }
    loadingElem.style.display = "block";
    try {
        let res = await fetch(API);
        let data = await res.json(); 
        display(data);
    }
    catch (err) {
        alert(err.message);
    }
    finally{
        textBoxElem.value="";
        loadingElem.style.display = "none";
    }
}
function display(d) {
    console.log(d);
    let html = `
        <div class="col-6">
            <h1>${d.location.name}</h1>
            <p>
                ${d.current.condition.text}
            </p>
            <h1>${d.current.temp_c} <sup>o</sup>C</h1>
        </div>
        <div class="col-6">
            <img src=${d.current.condition.icon} alt="">
        </div>
    `

    document.getElementById("ref").innerHTML=html;
}
