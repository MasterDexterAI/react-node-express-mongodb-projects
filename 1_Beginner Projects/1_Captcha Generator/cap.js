// captcha generator function

function captchaGenerator(){
    var alpha = new Array('A','B','C','D','E','F','G','a','b','c','d','e','f','g');
    //                     0   1   2

    var a = alpha[Math.floor(Math.random() * 14)]
    var b = alpha[Math.floor(Math.random() * 14)]
    var c = alpha[Math.floor(Math.random() * 14)]
    var d = alpha[Math.floor(Math.random() * 14)]
    var e = alpha[Math.floor(Math.random() * 14)]
    var f = alpha[Math.floor(Math.random() * 14)]

    var result = a +" "+ b +" "+ c +" "+ d +" "+ e +" "+ f;

    console.log(result);

    document.getElementById('main').value = result;

}



// validation function
function isValid() {
    var one = removeSpaces(document.getElementById('main').value);
    var two = removeSpaces(document.getElementById('user').value);

    if(one == two){
        return true
    }else{
        return false
    }
    
}


// remove spaces

function removeSpaces(goa){
    var a = goa.split(" ")
    //          ['a', 'f','g']
    var x = a.join("")
    //           'afg'
    return x
}