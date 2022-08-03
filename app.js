function randomFromArray(array){
    return array[Math.floorMath.random() * array.length];
}

function getKeyString(x,y){
    return `${x}x${y}`;
}


(function () {

    firebase.auth().onAuthStateChanged((user) =>{
        console.log(user);
        if(user){
            //logged in 
        } else {
            //logged out
        }
    })

    //Firebase protects us from bot attacks
    firebase.auth().signInAnonymously.catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //..
        console.log(errorCode, errorMessage);
    });




})();