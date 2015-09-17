function monChange(starter){
    setCookie("PokemonImage", starter);
    
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
    var PokemonImage = document.cookie.replace(/(?:(?:^|.*;\s*)PokemonImage\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return PokemonImage;
}

function monSet() {
 document.getElementById("starter").src = getPokemonImgCookie();   
    
}