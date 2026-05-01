async function getData(e){
    e.previousDefault();
    let textBoxElem=document.getElementById("textBox");
    let city=textBoxElem.value;
    let API=`https://api.weatherapi.com/v1/current.json?key=5e3735215ea54e8ea2973339260105=${city}`;
    if(city==""){
        alert("please enter city name");
        return;
    }
    try{
        let res=await fetch(API);
        let data=await res.json();
        coinsole.log(data);
    }
    catch(err){
        //console.log(err.message);
        alert(err.message);
    }
}