function MonChange(starter){
    setCookie("PokemonImage", starter);w
    
}

function getURL(site) {
  return site;   
}

function setCookie(name, value){
    document.cookie = "" + name + "=" + value;
    console.log(document.cookie);
}

function getCookie(name) {
    var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)background\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return myCookie;
}
        
function getPokemonImgCookie() {
    var myImg1Cookie = document.cookie.replace(/(?:(?:^|.*;\s*)PokemonImage\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return myImg1Cookie;
}