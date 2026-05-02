function placeorder(order){
    console.log("$(order) order placed");
    setTimeout(()=>{
        Payment()
        delivered();
    },2000);
}

function Payment(){
    console.log("payment Successfull");
}
function delivered(){
    console.log("order delivered");
}

placeOrder("Biryani",Payment,delivered);
placeOrder("pizza",Payment,()=>{
    console.log("order delivered");
});

