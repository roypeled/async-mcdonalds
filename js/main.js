function takeOrder(order){
    console.log("taking order", order);
    var time = Date.now();

    dummyWait(10);

    prepareOrder(order);
    serveOrder(order);
    clean();

    time = Date.now() - time;
    console.log("order took", time, "ms");
}

function prepareOrder(order){
    console.log("preparing order", order);

    dummyWait(2);

    cookBurger(order);
    fryFrenchFries(order);
    pourDrinks(order);
}

function serveOrder(order){
    console.log("serving order", order);
}

function cookBurger(order){
    console.log("cooking burger", order);

    dummyWait(4);

}

function fryFrenchFries(order){
    console.log("frying fries", order);

    dummyWait(3);
}

function pourDrinks(order){
    console.log("pouring drinks", order);

    dummyWait(2);

}

function clean(){
    console.log("cleaning");

    dummyWait(10);
}





function dummyWait(time){
    var x = "";
    for(var i=0; i<time * 2000000; i++) {
        x += "x";
    }
}


function order4Times(){
    var time = Date.now();

    takeOrder({order: 1});
    takeOrder({order: 2});
    takeOrder({order: 3});
    takeOrder({order: 4});

    time  = Date.now() - time;
    console.log("all together took", time, "ms");
}



function syncWork(){
    console.log("started");
    dummyWait(10);
    console.log("ended");
}









function asyncWork(){
    console.log("started");

    preformAsyncWork(function(){
        console.log("fries are ready!");
    });

    console.log("ended");

}

function preformAsyncWork(callback){
    console.log("wait patiently...");
    setTimeout(function(){
        console.log("done waiting");
        callback();
    }, 1000);
    console.log("almost there...");
}








