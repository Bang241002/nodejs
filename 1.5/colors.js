/*
jquery style
$("#someEl").click(functio(){...});
*/

var wakeUp = function(callback){
    console.log("I'm waking up!");
    if(callback)
        if(typeof callback === 'function');
            callback();
};

var checkPhone = function(callback){
    console.log("checkking phone...");
    if(callback)
        if(typeof callback === 'function');
            callback();
};

var eatBreakfast = function(callback){
    console.log("I'm eating breakfast...");
    if(callback)
        if(typeof callback === 'function');
            callback();
};

//BAD! Synchronous way
//wakeUp();
//checkPhone();
//eatBreakfast();

wakeUp (function(){
    checkPhone(function(){
        eatBreakfast();
    });
});
