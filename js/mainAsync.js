function takeOrderAsync(order, callback){
    console.log("taking order", order);
    var time = Date.now();
    var totalTime = time;

    asyncWait(10, function(){
        prepareOrderAsync(order, function(){
            serveOrderAsync(order, function(){
                cleanAsync(function(){
                    callback();
                    totalTime = Date.now() - totalTime;
                    console.log("order total took", totalTime, "ms");
                });
            });
        });

        time = Date.now() - time;
        console.log("order took", time, "ms");
    });

}




function prepareOrderAsync(order, callback){
    console.log("preparing order", order);

    var afterWait = function(){
        cookBurgerAsync(order, afterBurger)
    };

    var afterBurger = function(){
        fryFrenchFriesAsync(order, afterFries)
    };

    var afterFries = function(){
        pourDrinksAsync(order, callback);
    };

    asyncWait(2, afterWait);
}



function serveOrderAsync(order, callback){
    console.log("serving order", order);
    callback();
}



function cookBurgerAsync(order, callback){
    console.log("cooking burger", order);

    asyncWait(4, callback);

}



function fryFrenchFriesAsync(order, callback){
    console.log("frying fries", order);

    asyncWait(3, callback);
}



function pourDrinksAsync(order, callback){
    console.log("pouring drinks", order);

    asyncWait(2, callback);

}





function cleanAsync(callback){
    console.log("cleaning");

    asyncWait(10, callback);
}








function asyncWait(time, callback){
    setTimeout(function(){
        callback()
    }, time*200);
}
















function order4TimesAsync(){
    var time = Date.now();
    var total = 4;


    /*
    takeOrderAsync({order:1}, function(){
        takeOrderAsync({order:2}, function(){
            takeOrderAsync({order:3}, function(){
                takeOrderAsync({order: 4}, function(){
                    time  = Date.now() - time;
                    console.log("all together took", time, "ms");
                })
            })
        })
    })

     */


    takeOrderAsync({order: 1}, onDone);
    takeOrderAsync({order: 2}, onDone);
    takeOrderAsync({order: 3}, onDone);
    takeOrderAsync({order: 4}, onDone);

    function onDone(){
        total --;
        if(total == 0){
            time  = Date.now() - time;
            console.log("all together took", time, "ms");
        }
    }



}










